const bot = require('../utils/bot');
const { Buttons } = require('whatsapp-web.js/src/structures');

module.exports = {
  async sendMessage (request, response) {
    try {
      await bot.client.sendMessage(`55${request.body.phone}@c.us`, request.body.message);
      return response.status(200).json({ body: 'Message send!' });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error });
    }
  },

  async sendMessageMarketing (request, response) {
    try {
      // await bot.client.sendMessage(`55${request.body.phone}@c.us`, request.body.message);
      const botObject = await bot;

      const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
        + 'VERSION:3.0\n' 
        + 'FN:Solvee\n' // full name
        + 'ORG:Solvee;\n' // the organization of the contact
        + 'TEL;type=CELL;type=VOICE;waid=5527999588009:+55 27 99958-8009\n' // WhatsApp ID + phone number
        + 'END:VCARD'

      await botObject.sendMessage(`55${request.body.phone}@c.us`, { text: request.body.message });
      
      await botObject.sendMessage(`55${request.body.phone}@c.us`, { 
        contacts: { 
          displayName: 'Solvee', 
          contacts: [{ vcard }] 
        }
      })

      return response.status(200).json({ body: 'Message send!' });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error });
    }
  },

  async ping (request, response) {
    try {
      return response.status(200).json({ body: 'Ping'});
    } catch (error) {
      console.log(error)
    }
  }
}