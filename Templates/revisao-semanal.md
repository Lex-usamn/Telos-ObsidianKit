---
tipo: revisao_semanal
semana_iso: {{WEEK_ISO}}
---
# 📖 Revisão Semanal - Semana {{WEEK}}, {{YEAR}}

## 1. Quais foram minhas maiores vitórias e progressos nesta semana?
*Dica: Olhe os logs abaixo para se lembrar do que aconteceu.*
- {{VITORIAS}}

## 2. Quais foram os maiores desafios e o que aprendi com eles?
- {{DESAFIOS}}

## 3. Olhando o todo, qual padrão emerge sobre meu alinhamento com o Telos?
- {{PADROES}}

## 4. Qual é a ação Nº 1 para a próxima semana?
- {{PROXIMA_ACAO}}

## 5. Conexão com o TELOS
*Como os aprendizados desta semana impactam ou informam minha Visão, Propósito ou Estratégia principal?*
- {{CONEXAO_TELOS}}

---
### Logs Gerados Nesta Semana
```dataview
TABLE WITHOUT ID file.link as "Log Diário"
FROM "telos log"
WHERE meta(file.link).tipo = "log_telos" AND dateformat(date(meta(file.link).data_log), "yyyy-'W'WW") = this.semana_iso
SORT file.name asc