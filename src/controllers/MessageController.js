const bot = require('../utils/bot');

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

  async ping (request, response) {
    try {
      return response.status(200).json({ body: 'Ping'});
    } catch (error) {
      console.log(error)
    }
  }
}