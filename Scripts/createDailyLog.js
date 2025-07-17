module.exports = async (params) => {
  const { quickAddApi } = params;

  // --- CONFIGURAÇÃO ---
  const userName = "Lex-Usamn";
  const logFolder = "telos log";
  const templatePath = "Templates/template-log.md";
  // --------------------

  const notice = (msg) => new Notice(msg, 5000);
  const today = moment();
  const fileName = `Log - ${today.format("YYYY-MM-DD")}`;
  const newFilePath = `${logFolder}/${fileName}.md`;

  const fileExists = await app.vault.adapter.exists(newFilePath);

  if (fileExists) {
    notice("O log de hoje já existe. Abrindo...");
    const fileToOpen = app.vault.getAbstractFileByPath(newFilePath);
    if (fileToOpen) await app.workspace.getLeaf(true).openFile(fileToOpen);
    return;
  }

  // --- ENTREVISTA GUIADA ---
  notice("Iniciando reflexão do Telos...");
  const visao = await quickAddApi.inputPrompt("1. O que fiz hoje que me aproximou da minha Visão?");
  if (!visao) return;
  
  const proposito = await quickAddApi.inputPrompt("2. Como minhas ações de hoje refletiram meu Propósito?");
  if (!proposito) return;
  
  const estrategia = await quickAddApi.inputPrompt("3. Minha Estratégia funcionou? O que aprendi?");
  if (!estrategia) return;

  const valores = await quickAddApi.inputPrompt("4. Agi de acordo com meus Valores (Stand)?");
  if (!valores) return;

  const obstaculo = await quickAddApi.inputPrompt("5. Qual foi o maior obstáculo hoje?");
  if (!obstaculo) return;
  // -------------------------

  try {
    let templateContent = await app.vault.adapter.read(templatePath);

    // Substitui os marcadores no conteúdo do template
    templateContent = templateContent
      .replace("{{DATE}}", today.format("YYYY-MM-DD"))
      .replace("{{DATE_FULL}}", today.format("dddd, DD MMMM YYYY"))
      .replace("{{USER_NAME}}", userName)
      .replace("{{TIME}}", today.format("HH:mm"))
      // --- CORREÇÃO APLICADA AQUI ---
      .replace("{{VISAO}}", visao)
      .replace("{{PROPOSITO}}", proposito)
      .replace("{{ESTRATEGIA}}", estrategia)
      .replace("{{VALORES}}", valores)
      .replace("{{OBSTACULO}}", obstaculo);

    await app.vault.create(newFilePath, templateContent);
    notice("Log do Telos criado com sucesso!");

    const fileToOpen = app.vault.getAbstractFileByPath(newFilePath);
    if (fileToOpen) await app.workspace.getLeaf(true).openFile(fileToOpen);
      
  } catch (err) {
    notice(`ERRO: Falha ao criar o log. Verifique o console.`);
    console.error(err);
  }
};