const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

// Criar arquivo .nojekyll vazio na pasta out se não existir
const nojekyllFile = path.join(outDir, '.nojekyll');
if (!fs.existsSync(nojekyllFile)) {
  fs.writeFileSync(nojekyllFile, '');
  console.log('✓ Arquivo .nojekyll criado em out/');
} else {
  console.log('✓ Arquivo .nojekyll já existe em out/');
}

// Criar arquivo CNAME para domínio personalizado
const cnameFile = path.join(outDir, 'CNAME');
const cnameContent = 'www.embalagensprintbag.com';
fs.writeFileSync(cnameFile, cnameContent);
console.log('✓ Arquivo CNAME criado em out/ com domínio: www.embalagensprintbag.com');


