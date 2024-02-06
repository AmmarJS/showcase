<script>
    import { LiveEvent } from "$lib/components"

    export let data
</script>

<h2 class="text-3xl font-bold">Live Events</h2>
{#if data.events.length === 0}
    <p class="text-center text-3xl mt-10">Looks like there isn't any live events at the moment.</p>
    {:else}
    <form action="/" method="GET" class="flex flex-col space-y-2 w-full">
        <div class="w-full flex flex-row justify-between">
            <input type="text" name="search" id="search" placeholder="Search" class="input input-bordered w-full max-w-lg mt-2">
            <div class="flex justify-center space-x-4 w-full">
                <label class="label cursor-pointer">
                    <span class="label-text mr-2">Newest</span> 
                    <input type="radio" name="sort" class="radio" value="desc" checked />
                </label>

                <label class="label cursor-pointer">
                    <span class="label-text mr-2">Oldest</span> 
                    <input type="radio" name="sort" class="radio" value="asc" checked />
                </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="grid grid-cols-2 gap-4 mt-4 border-t-2">
        {#each data.events as event}
            <LiveEvent {event}/>
        {/each}
    </div>
{/if}