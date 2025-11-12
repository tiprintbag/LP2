const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '..', '.nojekyll');
const destFile = path.join(__dirname, '..', 'out', '.nojekyll');

// Criar arquivo .nojekyll vazio na pasta out se não existir
if (!fs.existsSync(destFile)) {
  fs.writeFileSync(destFile, '');
  console.log('✓ Arquivo .nojekyll criado em out/');
} else {
  console.log('✓ Arquivo .nojekyll já existe em out/');
}

