const fs = require("fs");
const path = require("path");

// Função para carregar dinamicamente todos os módulos de um diretório
async function importarModulos(directoryPath) {
  const modules = {};

  // Resolver o caminho absoluto usando __dirname
  const modulesDir = path.resolve(__dirname, directoryPath);

  // Ler todos os arquivos da pasta
  const files = fs.readdirSync(modulesDir);

  // Importar dinamicamente todos os arquivos
  for (const file of files) {
    if (file !== "index.js" && file.endsWith(".js")) {
      const module = require(path.join(modulesDir, file));
      Object.assign(modules, module);
    }
  }

  return modules;
}

module.exports = { importarModulos };
