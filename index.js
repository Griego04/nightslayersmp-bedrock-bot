

const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'nightslayersmp13.joinmc.world',
  port: 19132,
  username: 'NightSlayerBot',
  offline: false,
  onMsaCode: (data) => {
    console.log('Microsoft sign-in page:', data.verification_uri);
    console.log('Sign-in code:', data.user_code);
  }
});

client.on('join', () => console.log('Connected!'));
client.on('spawn', () => console.log('Bot spawned!'));
client.on('error', err => console.error('Bot error:', err));
client.on('close', () => console.log('Connection closed.'));
