const { App } = require('@slack/bolt');

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_USER_OAUTH_TOKEN,
});

app.event('app_home_opened', async ({ event, say }) => {
  console.log(event);
  await say(`Hello, <@${event.user}>!`);
});

app
  .start(process.env.PORT || 3000)
  .then(() => console.log('Bolt app is running!'));


// const welcomeChannelId = 'C12345';

// // When a user joins the team, send a message in a predefined channel asking them to introduce themselves
// app.event('team_join', async ({ event, client, logger }) => {
//   try {
//     // Call chat.postMessage with the built-in client
//     const result = await client.chat.postMessage({
//       channel: welcomeChannelId,
//       text: `Welcome to the team, <@${event.user.id}>! 🎉 You can introduce yourself in this channel.`
//     });
//     logger.info(result);
//   }
//   catch (error) {
//     logger.error(error);
//   }
// });