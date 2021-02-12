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
    appNames.push(`reactapp${i}`);
  }

  appNames.forEach((appName) => generateApp(appName));
}

function generateApp(appName) {
  // cp.execSync(`yarn nx g @nrwl/angular:app ${appName} --no-interactive`);

  const libNames = [];

  for (let i = 0; i < NUMBER_OF_LIBS; ++i) {
    libNames.push(`lib${i}`);
  }

  libNames.forEach((libName) => {
    generateParentLib(appName, libName);
  });

  const selectors = libNames
    .map(
      (libName) =>
        `<${toClassName(appName)}${toClassName(libName)}${toClassName(
          libName
        )} />`
    )
    .join('\n');

  const imports = libNames
    .map(
      (libName) =>
        `import { ${toClassName(appName)}${toClassName(libName)}${toClassName(
          libName
        )} } from '@largerepo/${appName}/${libName}/${libName}';`
    )
    .join('\n');

  fs.writeFileSync(
    `apps/${appName}/src/app/app.tsx`,
    `
    import React from 'react';

${imports}

import './app.scss';

export function App() {
  return <div>
    ${selectors}
  </div>;
}

export default App;

    `
  );
}

function generateParentLib(appName, libName) {
  console.log(`Generate ${libName} into ${appName}/${libName}...`);
  cp.execSync(
    `yarn nx g @nrwl/react:lib ${libName} --directory=${appName}/${libName} --buildable`
  );

  const libNames = [];

  for (let i = 0; i < NUMBER_OF_CHILD_LIBS; ++i) {
    libNames.push(`childlib${i}`);
  }

  libNames.forEach((childLibName) => {
    generateChildLib(appName, libName, childLibName);
  });

  const selectors = libNames
    .map(
      (childlib) =>
        `<${toClassName(appName)}${toClassName(libName)}${toClassName(
          childlib
        )} />`
    )
    .join('\n');

  const imports = libNames
    .map(
      (childlibName) =>
        `import { ${toClassName(appName)}${toClassName(libName)}${toClassName(
          childlibName
        )} } from '@largerepo/${appName}/${libName}/${childlibName}';`
    )
    .join('\n');

  fs.writeFileSync(
    `libs/${appName}/${libName}/${libName}/src/lib/${appName}-${libName}-${libName}.tsx`,
    `
      import React from 'react';
  
  ${imports}
  
  export function ${toClassName(appName)}${toClassName(libName)}${toClassName(
      libName
    )}() {
    return <div>
      ${selectors}
    </div>;
  }
  
  export default ${toClassName(appName)}${toClassName(libName)}${toClassName(
      libName
    )};

      `
  );
}

function generateChildLib(appName, libName, childLibName) {
  console.log(`Generate ${childLibName} into ${appName}/${libName}...`);
  cp.execSync(
    `yarn nx g @nrwl/react:lib ${childLibName} --directory=${appName}/${libName} --buildable`
  );

  const componentNames = [];

  for (let i = 0; i < NUMBER_OF_COMPONENTS; ++i) {
    componentNames.push(`${libName}${childLibName}component${i}`);
  }

  const selectors = [];
  const imports = [];

  componentNames.forEach((componentName) => {
    console.log(
      `Generate component ${componentName} for ${appName}-${libName}-${childLibName}...`
    );
    cp.execSync(
      `yarn nx g @nrwl/react:component ${componentName}  --project=${appName}-${libName}-${childLibName} --export=false`
    );

    selectors.push(`<${toClassName(componentName)} />`);
    imports.push(
      `import {${toClassName(
        componentName
      )}} from './${componentName}/${componentName}'`
    );
  });

  fs.writeFileSync(
    `libs/${appName}/${libName}/${childLibName}/src/lib/${appName}-${libName}-${childLibName}.tsx`,
    `
    import React from 'react';

${imports.join('\n')}

export function ${toClassName(appName)}${toClassName(libName)}${toClassName(
      childLibName
    )}() {
  return <div>
    ${selectors.join('\n')}
  </div>;
}

export default ${toClassName(appName)}${toClassName(libName)}${toClassName(
      childLibName
    )};

    `
  );
}

function toClassName(str) {
  return toCapitalCase(toPropertyName(str));
}

function toPropertyName(s) {
  return s
    .replace(/(-|_|\.|\s)+(.)?/g, (_, __, chr) =>
      chr ? chr.toUpperCase() : ''
    )
    .replace(/[^a-zA-Z\d]/g, '')
    .replace(/^([A-Z])/, (m) => m.toLowerCase());
}

function toCapitalCase(s) {
  return s.charAt(0).toUpperCase() + s.substr(1);
}

generate();
