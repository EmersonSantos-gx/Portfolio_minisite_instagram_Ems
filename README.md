# Emerson Santos — Portfólio & Gxcodev (React JS — Sem Vite)

Projeto em **React 18 (JavaScript)** separado por componentes em `src/`, utilizando um empacotador **Node.js puro (`build.js`)** sem Vite e sem binários em `node_modules/.bin/`, eliminando 100% o erro `Permission denied (Exit code 126)` na Vercel.

## Como Fazer Deploy na Vercel (Sem Erro 126)

1. Extraia os arquivos deste `.zip` na pasta do seu repositório (eles já estão direto na raiz).
2. **Importante**: Se você tinha uma pasta `node_modules` no seu GitHub, apague-a do repositório.
3. Na Vercel, em **Settings -> Build and Deployment -> Framework Preset**, selecione **Other** (ou deixe o `vercel.json` configurar automaticamente `node build.js` e a pasta `dist`).
4. Para rodar no seu computador:
   - `npm run build` (gera a pasta `dist/` lendo todos os componentes de `src/`)
   - `npm start` (inicia o servidor local em `http://localhost:3000`)
