import * as functions from 'firebase-functions';
const { to, from, sid, auth } = functions.config().twilio;
import * as twilio from 'twilio';
const client = twilio(sid, auth);

export const callme = functions.pubsub
  .topic('callme')
  .onPublish(async message => {
    const call = await client.calls.create({
      to,
      from,
      url: `https://instafire.page.link/tc4X`,
      method: 'GET'
    });

    console.log(call.toJSON());

    return call.sid;
  });
