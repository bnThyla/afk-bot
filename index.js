const mineflayer = require('mineflayer')

function start() {
  const bot = mineflayer.createBot({
    host: 'RGALSmp.aternos.me',
    port: 52272,
    username: 'AfkBot',
    version: false
  })

  bot.on('spawn', () => {
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 300)
    }, 30000)
  })

  bot.on('end', () => setTimeout(start, 10000))
  bot.on('error', console.log)
}
start()
