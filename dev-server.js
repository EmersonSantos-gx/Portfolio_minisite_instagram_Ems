const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Run build first
execSync('node build.js', { stdio: 'inherit' });

const distDir = path.join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

http.createServer((req, res) => {
  // Rebuild on each HTML refresh so edits in src/ appear immediately
  if (req.url === '/' || req.url === '/index.html') {
    try { execSync('node build.js'); } catch (e) { console.error(e); }
  }
  const cleanUrl = (req.url || '/').split('?')[0];
  const filePath = path.join(distDir, cleanUrl === '/' ? 'index.html' : cleanUrl);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(PORT, () => {
  console.log('Servidor React rodando em http://localhost:' + PORT);
});
