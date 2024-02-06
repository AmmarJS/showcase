<script>
    import { getImageURL } from '$lib/utils'

    export let event
</script>

<a href="/events/{event.id}" class="w-full h-28 flex items-center justify-between">
    <div class="avatar">
        <div class="w-20 rounded">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={event?.image ? getImageURL(event.collectionId, event.id, event.image, '80x80') : `https://placehold.co/80x80/4506CB/FFFFFF?text=${event.title}`} alt="liveEvent image">
        </div>
    </div>

    <div class="flex flex-col w-full ml-4 h-full justify-center">
        <p class="font-semibold text-lg">{event.title}</p>
        <p>Location: {event.location}</p>
        <p>Date: {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
</a>