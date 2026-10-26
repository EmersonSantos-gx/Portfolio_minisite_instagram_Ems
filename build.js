const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  for (const file of fs.readdirSync(publicDir)) {
    const srcFile = path.join(publicDir, file);
    if (fs.statSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, path.join(distDir, file));
      fs.copyFileSync(srcFile, path.join(__dirname, file));
    }
  }
}

const cssPath = path.join(__dirname, 'src', 'styles', 'global.css');
const cssContent = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';

const moduleOrder = [
  'src/config/portfolioData.js',
  'src/utils/helpers.js',
  'src/components/AmbientBackground.js',
  'src/components/Topbar.js',
  'src/components/SocialBar.js',
  'src/components/HeroSection.js',
  'src/components/StackSection.js',
  'src/components/ProjectPreview.js',
  'src/components/ProjectsSection.js',
  'src/components/StudioSection.js',
  'src/components/Footer.js',
  'src/components/FloatingElements.js',
  'src/components/modals/ProjectModal.js',
  'src/components/modals/BriefingModal.js',
  'src/components/modals/CopyLinkModal.js',
  'src/App.js',
];

function stripImportsAndExports(source) {
  return source
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '')
    .replace(/import\s+['"][^'"]+['"];?/g, '')
    .replace(/export\s+default\s+function\s+/g, 'function ')
    .replace(/export\s+function\s+/g, 'function ')
    .replace(/export\s+const\s+/g, 'const ')
    .trim();
}

const bundledParts = [
  `/* Build Timestamp: ${new Date().toISOString()} */`,
  'const { useState, useEffect, useRef } = React;',
];

for (const relPath of moduleOrder) {
  const fullPath = path.join(__dirname, relPath);
  const raw = fs.readFileSync(fullPath, 'utf8');
  bundledParts.push(`\n/* --- Arquivo: ${relPath} --- */\n` + stripImportsAndExports(raw));
}

bundledParts.push(`
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
`);

const appBundle = bundledParts.join('\n\n');

const indexHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
  <meta name="theme-color" content="#050B16">
  <meta name="color-scheme" content="dark">
  <title>Emerson Santos — Arte, código & solução</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" referrerpolicy="no-referrer">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>${cssContent}</style>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
${appBundle}
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml, 'utf8');
console.log('Build atualizado com sucesso!');