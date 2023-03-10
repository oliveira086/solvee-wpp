// const { Client, LocalAuth } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');

const makeWASocket = require('@adiwajshing/baileys').default
const { MessageType, DisconnectReason, useMultiFileAuthState,  } = require('@adiwajshing/baileys');


// const { state, saveCreds } = await 

const sock = useMultiFileAuthState('auth_info_baileys').then(res => {
  const sock = makeWASocket({
    auth: res.state,
    printQRInTerminal: true
  });

  return sock;
});


sock.ev?.on('connection.update', (update) => {
  const { connection, lastDisconnect } = update
  if(connection === 'close') {
    const shouldReconnect = lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut
    console.log('connection closed due to ' + lastDisconnect.error + ', reconnecting ' + shouldReconnect)
    // reconnect if not logged out
    if(shouldReconnect) {
      // initBot()
    }
  } else if(connection === 'open') {
    console.log('opened connection')
  }
});

sock.ev?.on('messages.upsert', async (msg) => {
  const message = msg.messages[0]?.message?.conversation;
  const sender = msg.messages[0]?.key?.remoteJid;

  console.log(sender);
  console.log(message);
  
  async function middleware () {
    let object = {
      status: true,
      message: 'Acesso liberado'
    }
    return object
  }
  
  }
);

module.exports = sock;

// sock.ev?.on('creds.update', res.saveCreds);


  

  

  


// return sock;



// const client = new Client({
//   puppeteer: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox','--use-gl=egl', '--disable-dev-shm-usage']},
//   authStrategy: new LocalAuth({ clientId: "client-one" })
// });

// client.on('qr', (qr) => {
//   qrcode.generate(qr, { small: true });
//   console.log(qr);
// });

// client.on('ready', () => {
//   console.log('Client is ready!');
// });

// module.exports = { client };

// client.initialize();


