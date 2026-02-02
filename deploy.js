// deploy.js
const { execSync } = require('child_process');

// Haal huidige branch op
const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

if (branch !== 'main') {
  console.error(
    `🚨 FOUT: Je zit op branch "${branch}". Switch naar "main" voor deploy.`,
  );
  process.exit(1);
}

console.log('✅ Branch check passed: main');

// Nu pas deployen naar gh-pages
execSync('gh-pages -d dist', { stdio: 'inherit' });

console.log('🚀 Deploy naar gh-pages voltooid!');
