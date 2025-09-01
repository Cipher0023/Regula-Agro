import fs from "fs";
import https from "https";
import next from "next";
import path from "path";
import { fileURLToPath } from "url";

// Shim for ES modules: __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações do Next
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Caminhos dos certificados
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, "SSL", "code.crt")),
  key: fs.readFileSync(path.join(__dirname, "SSL", "code.key")),
};

// Inicialização do servidor
app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      handle(req, res);
    })
    .listen(port, () => {
      console.log(`✅ Frontend HTTPS rodando em: https://localhost:${port}`);
    });
});
