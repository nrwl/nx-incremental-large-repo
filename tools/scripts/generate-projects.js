const cp = require('child_process');
const fs = require('fs');

const INIT_APP_INDEX = 0;
const NUMBER_OF_APPS = 1;
const NUMBER_OF_LIBS = 5;
const NUMBER_OF_CHILD_LIBS = 10;
const NUMBER_OF_COMPONENTS = 50;

function generate() {
  const appNames = [];

  for (let i = INIT_APP_INDEX; i < INIT_APP_INDEX + NUMBER_OF_APPS; ++i) {
    appNames.push(`app${i}`);
  }

  appNames.forEach(appName => generateApp(appName));
}

function generateApp(appName) {
  cp.execSync(`nx g @nrwl/angular:app ${appName} --no-interactive`);

  const libNames = [];

  for (let i = 0; i < NUMBER_OF_LIBS; ++i) {
    libNames.push(`lib${i}`);
  }

  libNames.forEach(libName => {
    generateParentLib(appName, libName);
  });

  const selectors = libNames
    .map(c => `<largerepo-${c}parent></largerepo-${c}parent>`)
    .join('\n');
  fs.writeFileSync(
    `apps/${appName}/src/app/app.component.html`,
    `
    <div>
      ${selectors}
    </div>
  `
  );

  const imports = libNames
  .map(
    libName =>
      `import { ${moduleName(
        libName
      )} } from '@largerepo/${appName}/${libName}/${libName}';`
  )
  .join('\n');

  const moduleImports = libNames
  .map(childLibName => moduleName(childLibName))
  .join(', ');

fs.writeFileSync(
  `apps/${appName}/src/app/app.module.ts`,
`
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

${imports}

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ${moduleImports}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

`
);
}

function generateParentLib(appName, libName) {
  cp.execSync(
    `nx g @nrwl/angular:lib ${libName} --directory=${appName}/${libName} --simpleModuleName --publishable`
  );

  const libNames = [];

  for (let i = 0; i < NUMBER_OF_CHILD_LIBS; ++i) {
    libNames.push(`childlib${i}`);
  }

  libNames.forEach(childLibName => {
    generateChildLib(appName, libName, childLibName);
  });

  const imports = libNames
    .map(
      childLibName =>
        `import { ${moduleName(
          childLibName
        )} } from '@largerepo/${appName}/${libName}/${childLibName}';`
    )
    .join('\n');
  const moduleImports = libNames
    .map(childLibName => moduleName(childLibName))
    .join(', ');

  fs.writeFileSync(
    `libs/${appName}/${libName}/${libName}/src/lib/${libName}.module.ts`,
    `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  ${imports}

  @NgModule({
    imports: [CommonModule, ${moduleImports}]
  })
  export class ${moduleName(libName)} {}
  `
  );

  cp.execSync(
    `nx g @nrwl/angular:component ${libName}parent --project=${appName}-${libName}-${libName} --export`
  );
  const selectors = libNames
    .map(c => `<largerepo-${libName}${c}parent></largerepo-${libName}${c}parent>`)
    .join('\n');
  fs.writeFileSync(
    `libs/${appName}/${libName}/${libName}/src/lib/${libName}parent/${libName}parent.component.html`,
    `
    <div>
      ${selectors}
    </div>
  `
  );
}

function generateChildLib(appName, libName, childLibName) {
  cp.execSync(
    `nx g @nrwl/angular:lib ${childLibName} --directory=${appName}/${libName} --simpleModuleName --publishable`
  );

  const componentNames = [];

  for (let i = 0; i < NUMBER_OF_COMPONENTS; ++i) {
    componentNames.push(`${libName}${childLibName}component${i}`);
  }

  componentNames.forEach(componentName => {
    cp.execSync(
      `nx g @nrwl/angular:component ${componentName}  --project=${appName}-${libName}-${childLibName}`
    );
  });

  cp.execSync(
    `nx g @nrwl/angular:component ${libName}${childLibName}parent --project=${appName}-${libName}-${childLibName} --export`
  );

  const selectors = componentNames
    .map(c => `<largerepo-${c}></largerepo-${c}>`)
    .join('\n');

  fs.writeFileSync(
    `libs/${appName}/${libName}/${childLibName}/src/lib/${libName}${childLibName}parent/${libName}${childLibName}parent.component.html`,
    `
    <div>
      ${selectors}
    </div>
  `
  );
}

function moduleName(libName) {
  return libName.charAt(0).toUpperCase() + libName.slice(1) + 'Module';
}

generate();
