const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const outDir = path.join(__dirname, '..', 'out');

// Função para copiar diretório recursivamente
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copiar pasta public para out (isso copia todas as imagens, vídeos, etc)
if (fs.existsSync(publicDir)) {
  copyDir(publicDir, outDir);
  console.log('✓ Arquivos de public/ copiados para out/');
} else {
  console.log('⚠ Pasta public/ não encontrada');
}

