const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const outDir = path.join(__dirname, '..', 'out');

// Função para copiar diretório recursivamente
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`⚠ Diretório fonte não existe: ${src}`);
    return;
  }

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
      try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`  ✓ Copiado: ${entry.name}`);
      } catch (error) {
        console.error(`  ✗ Erro ao copiar ${entry.name}:`, error.message);
      }
    }
  }
}

// Copiar pasta public para out (isso copia todas as imagens, vídeos, etc)
console.log('Copiando arquivos de public/ para out/...');
if (fs.existsSync(publicDir)) {
  copyDir(publicDir, outDir);
  console.log('✓ Arquivos de public/ copiados para out/');
  
  // Verificar se as imagens foram copiadas
  const imagesDir = path.join(outDir, 'images');
  if (fs.existsSync(imagesDir)) {
    const images = fs.readdirSync(imagesDir);
    console.log(`✓ ${images.length} arquivo(s) encontrado(s) em out/images/`);
  } else {
    console.log('⚠ Pasta out/images/ não foi criada');
  }
} else {
  console.log('⚠ Pasta public/ não encontrada');
}

