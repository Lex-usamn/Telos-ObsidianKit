module.exports = async (params) => {
  const { quickAddApi } = params;

  // --- CONFIGURAÇÃO ---
  const reviewFolder = "Revisões Semanais";
  const templatePath = "Templates/revisao-semanal.md";
  // --------------------

  const notice = (msg) => new Notice(msg, 5000);
  const today = moment();

  const weekISO = today.format("YYYY-[W]WW");
  const weekNum = today.format("WW");
  const year = today.format("YYYY");

  const fileName = `Revisão Semanal - ${weekISO}.md`;
  const newFilePath = `${reviewFolder}/${fileName}`;

  if (!await app.vault.adapter.exists(reviewFolder)) {
    await app.vault.createFolder(reviewFolder);
    notice(`Pasta "${reviewFolder}" criada.`);
  }

  const fileExists = await app.vault.adapter.exists(newFilePath);

  if (fileExists) {
    notice("A revisão desta semana já existe. Abrindo...");
    const fileToOpen = app.vault.getAbstractFileByPath(newFilePath);
    if (fileToOpen) await app.workspace.getLeaf(true).openFile(fileToOpen);
    return;
  }

  // --- ENTREVISTA GUIADA SEMANAL ---
  notice("Iniciando Revisão Semanal...");
  const vitorias = await quickAddApi.inputPrompt("1. Maiores vitórias e progressos da semana?");
  if (!vitorias) return;

  const desafios = await quickAddApi.inputPrompt("2. Maiores desafios e aprendizados?");
  if (!desafios) return;

  const padroes = await quickAddApi.inputPrompt("3. Qual padrão emergiu sobre seu alinhamento com o Telos?");
  if (!padroes) return;

  const proximaAcao = await quickAddApi.inputPrompt("4. Qual é a ação Nº 1 para a próxima semana?");
  if (!proximaAcao) return;

  const conexaoTelos = await quickAddApi.inputPrompt("5. Como isso tudo se conecta ao seu Telos principal?");
  if (!conexaoTelos) return;
  // ------------------------------------

  try {
    let templateContent = await app.vault.adapter.read(templatePath);

    // Substitui os marcadores pelos dados da semana e respostas
    templateContent = templateContent
      .replace("{{WEEK_ISO}}", weekISO)
      .replace("{{WEEK}}", weekNum)
      .replace("{{YEAR}}", year)
      .replace("{{VITORIAS}}", vitorias)
      .replace("{{DESAFIOS}}", desafios)
      .replace("{{PADROES}}", padroes)
      .replace("{{PROXIMA_ACAO}}", proximaAcao)
      .replace("{{CONEXAO_TELOS}}", conexaoTelos);

    await app.vault.create(newFilePath, templateContent);
    notice("Revisão semanal criada com sucesso!");

    const fileToOpen = app.vault.getAbstractFileByPath(newFilePath);
    if (fileToOpen) await app.workspace.getLeaf(true).openFile(fileToOpen);
      
  } catch (err) {
    notice(`ERRO: Falha ao criar a revisão. Verifique o console.`);
    console.error(err);
  }
};