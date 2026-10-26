const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// 1. Copy public/ assets (like perfil.jpg) to dist/
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
  for (const file of fs.readdirSync(publicDir)) {
    fs.copyFileSync(path.join(publicDir, file), path.join(distDir, file));
  }
}

// 2. Copy global.css to dist/styles.css
const cssPath = path.join(__dirname, 'src', 'styles', 'global.css');
if (fs.existsSync(cssPath)) {
  fs.copyFileSync(cssPath, path.join(distDir, 'styles.css'));
}

// 3. Read all modular React files from src/ in dependency order and bundle them cleanly
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
    // Remove import ... from '...' (single and multi-line)
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/g, '')
    // Remove side-effect imports: import '...'
    .replace(/import\s+['"][^'"]+['"];?/g, '')
    // Convert `export default function Name` -> `function Name`
    .replace(/export\s+default\s+function\s+/g, 'function ')
    // Convert `export function Name` -> `function Name`
    .replace(/export\s+function\s+/g, 'function ')
    // Convert `export const Name` -> `const Name`
    .replace(/export\s+const\s+/g, 'const ')
    .trim();
}

const bundledParts = [
  '/* === Bundle Gerado Automaticamente a partir dos Componentes em src/ === */',
  'const { useState, useEffect, useRef } = React;',
];

for (const relPath of moduleOrder) {
  const fullPath = path.join(__dirname, relPath);
  const raw = fs.readFileSync(fullPath, 'utf8');
  bundledParts.push(`\n/* --- Arquivo: ${relPath} --- */\n` + stripImportsAndExports(raw));
}

bundledParts.push(`
/* --- Inicialização ReactDOM --- */
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
`);

const appBundle = bundledParts.join('\n\n');
fs.writeFileSync(path.join(distDir, 'app.js'), appBundle, 'utf8');

// 4. Generate production dist/index.html
const indexHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#050B16">
  <meta name="color-scheme" content="dark">
  <meta name="description" content="Emerson Santos — Desenvolvedor Full Stack, UI/UX e Automações. Conheça minha trajetória, projetos e o estúdio digital Gxcodev. Maceió, AL • Todo o Brasil.">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Emerson Santos | Arte, código & solução">
  <meta property="og:description" content="Desenvolvimento Full Stack, UI/UX e automações. Vamos dar forma à sua próxima ideia?">
  <title>Emerson Santos — Arte, código & solução</title>
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%23050b16'/%3E%3Cpath d='m25 20-13 12 13 12m14-24 13 12-13 12' fill='none' stroke='%230ea5e9' stroke-width='5'/%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" referrerpolicy="no-referrer">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="/styles.css">
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel" src="/app.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml, 'utf8');
console.log('Build concluido com sucesso em dist/ (sem Vite)!');
