# 🚀 Dashboard do Telos

> [!NOTE] Painel de Controle
> Esta página se atualiza automaticamente com suas últimas atividades. Use-a como ponto de partida para suas reflexões.

---

### Últimos Logs Diários
```dataview**  
TABLE WITHOUT ID file.link as "Log"
FROM "telos log"
SORT file.ctime desc
LIMIT 5
```

### Últimas Revisões Semanais
```dataview**  
TABLE WITHOUT ID file.link as "Revisão"
FROM "Revisões Semanais"
SORT file.name desc
LIMIT 5 
```

## 💡 Meus Princípios e Insights Fundamentais

```dataview**  
LIST
FROM "Princípios"
WHERE file.outlinks
SORT file.ctime desc
```

## 🎯 Conexões Diretas com os Pilares do Telos
```dataviewjs
const pages = dv.pages('"Princípios"')
    .where(p => p.file.outlinks.some(link => link.path.includes("usamn.md")))
    .sort(p => p.file.ctime, 'desc');

if (pages.length > 0) {
    dv.table(["Princípio", "Pilar Conectado"], pages.map(p => {
        const pillarLink = p.file.outlinks.find(link => link.path.includes("usamn.md"));
        let pillarName = pillarLink.display ? pillarLink.display : pillarLink.fileName();
        if (pillarName.includes("do Telos")) {
            pillarName = pillarName.replace(" do Telos", "");
        }
        return [p.file.link, pillarName];
    }));
} else {
    dv.paragraph("Nenhum princípio conectado ao Telos ainda. Use o botão 💡 para criar uma conexão!");
}
```

