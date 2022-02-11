const ttthelp = (p) => {
    return `
「 ❌JOGO DA VELHA⭕ 」

◪ APENAS PARA GRUPOS

◪ INICIAR
  │
  ├─ ❏ Para iniciar digite:
  │     └「 ${p}ttt [ DIFICULDADE ] 」
  └─ ❏ Apenas uma pessoa por vez

◪ DIFICULDADE
  │
  ├─ ❏ easy : totalmente aleatório
  │     (Só azarado pra perder nessa)
  ├─ ❏ normal : 66% de chance 
  │     de bloqueio e vitória
  ├─ ❏ hard : 100% de chance 
  │     de bloqueio e vitória 
  └─ ❏ impossible : Só Kuuhaku
           pra vencer isso

◪ TEMPORIZADOR
  │
  ├─ ❏ Uma nova partida só poderá
  │     ser iniciada após um intervalo
  │     de 4 minutos apartir do início
  │     da partida anterior
  │
  └─ ❏ A partida terminará 
           automaticamente após 4 minutos

◪ COMANDOS
  │
  ├─ ❏ Para marcar digite:
  │     └「 ${p}coord [ COORDENADA ] 」
  │
  └─ ❏ Exemplo:
	        └「   ${p}coord a1 
	               ----------------------
	               🌀1️⃣2️⃣3️⃣
	               🅰️❌🔲🔲
	               🅱️🔲🔲🔲
	               ©️🔲🔲🔲 」

◪ SEU STATUS
  │
  └─ ❏ Para ver seu status digite:
          └「 ${p}tttme 」

◪ RECOMPENSAS
  │
  ├─ ❏ EASY
  │     ├ Vitória : +「 20000 / 60000 」+ XP
  │     └ Derrota : -「 2000 / 2000 」- XP
  │
  ├─ ❏ NORMAL
  │     ├ Vitória : +「 30000 / 60000 」+ XP
  │     └ Derrota : -「 3000 / 3000 」 - XP
  │
  ├─ ❏ HARD
  │     ├ Vitória : +「 40000 / 80000 」+ XP
  │     └ Derrota : -「 4000 / 4000 」- XP
  │
  ├─ ❏ IMPOSSIBLE
  │     ├ Vitória : +「 1000000 / 10000000 」+ XP
  │     └ Derrota : -「 0 / 0 」- XP
  │
  ├─ ❏ EMPATE
  │     └「 0 / 0 」
  │ 
  └─ ❏ PARTIDA NÃO FINALIZADA
          └ -「 75 / 150 」
`
}

exports.ttthelp = ttthelp