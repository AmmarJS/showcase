import { serializenonPOJOs } from '$lib/utils'
import { error } from '@sveltejs/kit';

export const load = async ({ locals, params, url }) => {
    const getAllEvents = async () => {
        try {
            const searchParam = url.searchParams.get('search') ?? '';
            const sortParam = url.searchParams.get('sort') ?? 'desc';

            let sortOperation;
            switch(sortParam) {
                case 'asc':
                    sortOperation='+';
                    break;
                default:
                    sortOperation="-";
            }

            const events = serializenonPOJOs(await locals.pb.collection('liveEvents').getFullList({
                sort: `${sortOperation}date`,
                filter: `isExpired = false && date >= @now ${searchParam !== '' ? `&& (title ?~ "${searchParam}" || location ?~ "${searchParam}")` : ``}`
            }))
            return events;
        } catch (err) {
            console.error("Error: ", err)
            throw error(err.status, err.message)
        }
    }

    return {
        events: await getAllEvents()
    }
}