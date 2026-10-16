const mineflayer = require('mineflayer')

function start() {
  console.log('Baglaniyor...')
  const bot = mineflayer.createBot({
    host: 'RGALSmp.aternos.me',
    port: 52272,
    username: 'bonjour',
    version: false
  })

  bot.on('login', () => console.log('GIRDI'))
  bot.on('spawn', () => {
    console.log('SPAWN OLDU')
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 300)
    }, 30000)
  })
  bot.on('kicked', (r) => console.log('ATILDI:', r))
  bot.on('end', (r) => {
    console.log('KOPTU:', r)
    setTimeout(start, 10000)
  })
  bot.on('error', (e) => console.log('HATA:', e.message))
}
start()
