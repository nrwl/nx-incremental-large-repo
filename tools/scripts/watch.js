const watch = require('node-watch');
const cp = require('child_process');
const tk = require('tree-kill');

let changed = true;

watch('libs', { recursive: true }, function(evt, name) {
  changed = true;
});

watch('apps', { recursive: true }, function(evt, name) {
  changed = true;
});

function run() {
  if (changed) {
    changed = false;
    cp.execSync('nx build app0 --with-deps --parallel --maxParallel=16', {
      stdio: [0, 1, 2],
      env: { ...process.env, FORCE_COLORS: 'true' }
    });
  }
  setTimeout(() => run(), 1000);
}

process.on('exit', s => {
  tk(s);
});

run();
console.log('The application is running on localhost:4200');
