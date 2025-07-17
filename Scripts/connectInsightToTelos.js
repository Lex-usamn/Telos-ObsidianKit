module.exports = async (params) => {
  const { quickAddApi } = params;

  // --- CONFIGURAÇÃO ---
  const telosNotePath = "usamn.md"; // Caminho para sua nota principal do Telos
  const insightsFolder = "Princípios"; // Pasta para as notas atômicas
  const telosPillars = ["Visão", "Propósito", "Estratégia", "Valores"];
  // --------------------

  const notice = (msg) => new Notice(msg, 5000);

  // Garante que a pasta de insights exista
  if (!await app.vault.adapter.exists(insightsFolder)) {
    await app.vault.createFolder(insightsFolder);
    notice(`Pasta "${insightsFolder}" criada.`);
  }

  // --- ENTREVISTA DE CONEXÃO ---
  const insight = await quickAddApi.inputPrompt("Qual é o seu insight ou princípio chave?");
  if (!insight) return;

  const pillar = await quickAddApi.suggester(telosPillars, telosPillars);
  if (!pillar) return;
  // -----------------------------

  // Formata o nome do arquivo e o conteúdo da nova nota
  const fileName = insight.replace(/[^\w\s]/gi, '').substring(0, 50); // Limpa o nome do arquivo
  const newFilePath = `${insightsFolder}/${fileName}.md`;
  const linkToTelosPillar = `[[${telosNotePath}#${pillar}|${pillar} do Telos]]`;
  
  const newNoteContent = `# ${insight}\n\nEste princípio se conecta diretamente com o pilar de **${linkToTelosPillar}**.\n\n## Contexto e Detalhes\n\n- `;

  // Verifica se a nota de insight já existe
  if (await app.vault.adapter.exists(newFilePath)) {
    notice("Uma nota com este insight já existe. Abrindo...");
  } else {
    await app.vault.create(newFilePath, newNoteContent);
    notice(`Nota de insight "${fileName}" criada e conectada!`);
  }

  // Abre a nova nota de insight para você adicionar mais detalhes
  const fileToOpen = app.vault.getAbstractFileByPath(newFilePath);
  if (fileToOpen) {
    const leaf = app.workspace.getLeaf(true);
    await leaf.openFile(fileToOpen);
    // Coloca o cursor no final da nota, pronto para você escrever
    leaf.view.editor.setCursor(leaf.view.editor.lastLine());
  }
};