<script>
    import { getImageURL } from '$lib/utils'

    export let data
</script>

<div class="flex flex-col w-full mt-4 p-20">
    <div class="avatar">
        <div class="w-full rounded">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={data.liveEvent?.image ? getImageURL(data.liveEvent.collectionId, data.liveEvent.id, data.liveEvent.image, '80x80') : `https://placehold.co/80x80/4506CB/FFFFFF?text=${data.liveEvent.title}`} alt="liveEvent image">
        </div>
    </div>
    <h1 class="text-2xl font-bold mt-4">{data.liveEvent.title}</h1>
    <p class="text-2xl font-light mt-2">Location: {data.liveEvent.location}</p>
    <p>Date: {new Date(data.liveEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
</div>