const heroes = [
  { name: 'Pelé', xp: 11000 },
  { name: 'Zico', xp: 10000 },
  { name: 'Ronaldinho Gaúcho', xp: 9000 },
  { name: 'Ronaldo Fenômeno', xp: 8000 },
  { name: 'Romário', xp: 6000 },
  { name: 'Garrincha', xp: 3000 },
  { name: 'Neymar', xp: 2000 },
  { name: 'Rivelino', xp: 1000 }
]

const levels = [
  { xp: 10000, level: 'Radiante' },
  { xp: 9000, level: 'Imortal' },
  { xp: 8000, level: 'Acendente' },
  { xp: 7000, level: 'Platina' },
  { xp: 5000, level: 'Ouro' },
  { xp: 2000, level: 'Prata' },
  { xp: 1000, level: 'Bronze' },
]

for (const hero of heroes) {
  heroLevel = ''

  for (const level of levels) {
    if (hero.xp > level.xp) {
      heroLevel = level.level
      break;
    }
  }

  if (!heroLevel) {
    heroLevel = 'Ferro'
  }

  console.log(`O Herói de nome ${hero.name} está no nível de ${heroLevel}`)
}
