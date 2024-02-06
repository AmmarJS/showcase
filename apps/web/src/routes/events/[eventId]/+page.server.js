import { serializenonPOJOs } from '$lib/utils'
import { error } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
    const getEvent = async (eventId) => {
        try {
            const event = serializenonPOJOs(await locals.pb.collection('liveEvents').getOne(eventId))
            return event;
        } catch (err) {
            console.error("Error: ", err)
            throw error(err.status, err.message)
        }
    }

    return {
        liveEvent: await getEvent(params.eventId)
    }
}