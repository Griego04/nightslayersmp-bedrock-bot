
const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: process.env.MC_HOST || 'nightslayersmp13.joinmc.world',
  port: Number(process.env.MC_PORT || 19132),
  username: process.env.MC_USERNAME || 'NightSlayerBot',
  offline: true
});

client.on('join', () => console.log('Connected!'));
client.on('spawn', () => console.log('Bot spawned!'));
client.on('error', err => console.error('Bot error:', err.message));
client.on('close', () => console.log('Connection closed.'));
