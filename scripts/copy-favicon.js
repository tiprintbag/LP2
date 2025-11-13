const fs = require('fs');
const path = require('path');

// Caminho do arquivo de origem (na raiz do projeto)
const sourceFile = path.join(__dirname, '..', 'Símbolo Printbag 1.png');
// Caminho de destino (na pasta public)
const destFile = path.join(__dirname, '..', 'public', 'favicon.png');

try {
  // Verifica se o arquivo de origem existe
  if (fs.existsSync(sourceFile)) {
    // Copia o arquivo
    fs.copyFileSync(sourceFile, destFile);
    console.log('✓ Favicon copiado para public/favicon.png');
  } else {
    console.log('⚠ Arquivo "Símbolo Printbag 1.png" não encontrado na raiz do projeto');
    console.log('  Por favor, copie manualmente o arquivo para public/favicon.png');
  }
} catch (error) {
  console.error('✗ Erro ao copiar favicon:', error.message);
  process.exit(1);
}

