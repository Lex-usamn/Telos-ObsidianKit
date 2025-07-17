# Kit de Autoconhecimento: Telos + Obsidian

  <!-- Você precisará tirar um print do seu dashboard funcionando e subir para um site como o Imgur para colocar o link aqui -->

Este repositório é um "Starter Kit" para implementar um sistema de autoconhecimento e crescimento pessoal no Obsidian, baseado na metodologia **Telos** de Daniel Miessler. Ele foi projetado para ser usado em conjunto com uma IA de análise como o **Fabric**, transformando seu Obsidian em um poderoso parceiro de "terapia" e coaching.

O sistema automatiza a captura de reflexões diárias e semanais através de "entrevistas" guiadas, organiza seus insights e os conecta ao seu documento mestre do Telos.

## 🚀 Funcionalidades

*   **Log Diário Interativo:** Um botão que te entrevista sobre os pilares do Telos (Visão, Propósito, Estratégia, Valores).
*   **Revisão Semanal Guiada:** Um segundo botão que te entrevista sobre os padrões da semana e já puxa todos os logs relevantes para análise.
*   **Conector de Insights:** Um terceiro botão para transformar aprendizados chave em "notas atômicas" e conectá-las automaticamente ao seu documento Telos.
*   **Dashboard Central:** Uma única página que se atualiza em tempo real, mostrando seus últimos registros, revisões e os insights conectados.

## 🛠️ Pré-requisitos (Plugins do Obsidian)

Antes de começar, você precisa ter os seguintes plugins da comunidade instalados e ativados no seu Obsidian:

1.  **QuickAdd:** O motor principal da nossa automação.
2.  **Dataview:** Para criar as tabelas e listas dinâmicas no dashboard.
3.  **Commander:** Para adicionar os botões de ação ao menu lateral.
4.  **(Opcional)** `Multi-column Markdown`: Para o layout do dashboard em colunas.

## ⚙️ Guia de Instalação e Configuração

Siga estes passos para configurar o sistema no seu próprio cofre do Obsidian.

### 1. Copie os Arquivos

*   Baixe o conteúdo deste repositório.
*   Copie as pastas `Scripts`, `Templates`, `telos log`, `Revisões Semanais` e `Princípios` para a raiz do seu cofre do Obsidian.
*   Copie os arquivos `Dashboard do Telos.md` e `usamn.md` para a raiz do seu cofre.

### 2. Configure os Scripts

*   Abra o arquivo `Scripts/createDailyLog.js` e altere a variável `userName` para o seu nome de usuário.
*   `const userName = "SEU NOME AQUI";`
*   Faça o mesmo para os outros scripts, se necessário.

### 3. Configure o QuickAdd

Crie três "Choices" do tipo **Macro** no QuickAdd:

*   **Choice 1: "Log Diário"**
    *   Configure a macro para executar o script `Scripts/createDailyLog.js`.
    *   Ative o ícone de raio (⚡) para esta "Choice".

*   **Choice 2: "Revisão Semanal"**
    *   Configure a macro para executar o script `Scripts/createWeeklyReview.js`.
    *   Ative o ícone de raio (⚡).

*   **Choice 3: "Conectar Insight"**
    *   Configure a macro para executar o script `Scripts/connectInsightToTelos.js`.
    *   Ative o ícone de raio (⚡).

### 4. Configure o Commander (Botões no Menu)

*   Vá nas configurações do plugin **Commander**.
*   Na seção "Ribbon", adicione 3 novos comandos:
    1.  **Botão 1:**
        *   **Ícone:** ✏️ (ou outro de sua escolha)
        *   **Comando:** `QuickAdd: Log Diário`
        *   **Nome (Tooltip):** Criar Log Diário
    2.  **Botão 2:**
        *   **Ícone:** 🗓️
        *   **Comando:** `QuickAdd: Revisão Semanal`
        *   **Nome (Tooltip):** Criar Revisão Semanal
    3.  **Botão 3:**
        *   **Ícone:** 💡
        *   **Comando:** `QuickAdd: Conectar Insight`
        *   **Nome (Tooltip):** Conectar Insight ao Telos

## 🚀 Como Usar

Com tudo configurado, seu fluxo de trabalho é simples:

1.  **Diariamente:** Clique no botão ✏️ para registrar seu log.
2.  **Semanalmente:** Clique no botão 🗓️ para fazer sua revisão.
3.  **A Qualquer Momento:** Quando tiver um insight, clique no botão 💡 para capturá-lo e conectá-lo.
4.  **Sempre:** Acesse seu `Dashboard do Telos.md` para ter uma visão geral de todo o sistema.

## 🤝 Contribuições

Sinta-se à vontade para abrir "issues" com sugestões ou "pull requests" com melhorias. Este é um projeto vivo!

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE.md).