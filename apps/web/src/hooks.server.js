import Pocketbase from 'pocketbase'
import { serializenonPOJOs } from './lib/utils';
import schedule from "node-schedule";

export const handle = async ({ event, resolve }) => {
    event.locals.pb = new Pocketbase("http://127.0.0.1:8090")
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || '');

    if(event.locals.pb.authStore.isValid) {
        event.locals.user = serializenonPOJOs(event.locals.pb.authStore.model);
    } else {
        event.locals.user = undefined;
    }

    const response = await resolve(event);

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

    return response;
}

const job = schedule.scheduleJob('0 0 * * *', async function () {
    const pb = new Pocketbase('http://127.0.0.1:8090');

    const expiredEvents = await pb.collection('liveEvents').getFullList({
        filter: `date < @now`
    });

    console.log(expiredEvents)

    expiredEvents.forEach(async (event) => {
        await pb.collection('liveEvents').update(event.id, {"isExpired": true})
    })
})