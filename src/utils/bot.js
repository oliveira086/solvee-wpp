const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  puppeteer: { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox','--use-gl=egl', '--disable-dev-shm-usage']},
  authStrategy: new LocalAuth({ clientId: "client-one" })
});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log(qr);
});

client.on('ready', () => {
  console.log('Client is ready!');
});

module.exports = { client };

client.initialize();
