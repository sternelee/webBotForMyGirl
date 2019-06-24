const { Wechaty } = require('wechaty')

const bot = new Wechaty()

async function startBot () {
    await bot.start()
    bot.on('scan',        qrcode  => {
        console.log('扫码登录：' + qrcode)
        require('qrcode-terminal').generate(qrcode)
    })
    .on('login',       async user => {
        console.log('登录成功：' + user)
        const contact = await bot.Contact.find({name: '小冰'})
        console.log(contact)
        await contact.say('我不开心!')
    })
    .on('message',     message => console.log('收到消息：' + message))
    .on('friendship',  friendship => console.log('收到好友请求：' + friendship))
    .on('room-invite', invitation => console.log('收到入群邀请：' + invitation))

    const contact = await bot.Contact.find({name: '小冰'})
    console.log(contact)
    await contact.say('我不开心!')
}

// Wechaty.instance()

startBot()