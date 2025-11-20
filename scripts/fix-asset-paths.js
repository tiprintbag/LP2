const fs = require('fs');
const path = require('path');

// Verificar se USE_CUSTOM_DOMAIN está definido
const useCustomDomain = process.env.USE_CUSTOM_DOMAIN === 'true';

if (!useCustomDomain) {
  console.log('✓ Build para GitHub Pages padrão - mantendo /LP2 nos caminhos');
  process.exit(0);
}

console.log('✓ Corrigindo caminhos de assets para domínio personalizado...');

const outDir = path.join(__dirname, '..', 'out');

// Função para processar arquivos recursivamente
function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js')) {
      // Ler o arquivo HTML ou JS
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Substituir /LP2/images/ por /images/
      content = content.replace(/\/LP2\/images\//g, '/images/');
      // Substituir /LP2/_next/ por /_next/ (incluindo CSS e JS)
      content = content.replace(/\/LP2\/_next\//g, '/_next/');
      // Substituir /LP2/favicon por /favicon
      content = content.replace(/\/LP2\/favicon/g, '/favicon');
      // Substituir href="/LP2/ por href="/
      content = content.replace(/href="\/LP2\//g, 'href="/');
      // Substituir src="/LP2/ por src="/
      content = content.replace(/src="\/LP2\//g, 'src="/');
      // Substituir assetPrefix":"/LP2" por assetPrefix":""
      content = content.replace(/"assetPrefix":"\/LP2"/g, '"assetPrefix":""');
      // Substituir assetPrefix:'/LP2' por assetPrefix:''
      content = content.replace(/assetPrefix:'\/LP2'/g, "assetPrefix:''");
      // Substituir assetPrefix: "/LP2" por assetPrefix: ""
      content = content.replace(/assetPrefix:\s*"\/LP2"/g, 'assetPrefix: ""');
      // Substituir qualquer referência a "/LP2/" no início de caminhos
      content = content.replace(/["']\/LP2\//g, (match) => match.replace('/LP2/', '/'));
      
      // Se houve mudanças, escrever o arquivo
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✓ Corrigido: ${path.relative(outDir, filePath)}`);
      }
    }
  });
}

// Processar a pasta out
if (fs.existsSync(outDir)) {
  processDirectory(outDir);
  console.log('✓ Caminhos de assets corrigidos!');
} else {
  console.error('✗ Pasta out/ não encontrada!');
  process.exit(1);
}

