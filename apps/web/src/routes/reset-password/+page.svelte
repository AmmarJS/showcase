<script>
    export let form
</script>

<div class="flex flex-col items-center w-full h-full">
    <h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
        Reset your password
    </h2>
    <form action="?/resetPassword" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">

        <div class="w-full form-control max-w-md">
            <label for="email" class="label font-medium pb-1">
                <span class="label-text">Email</span>
            </label>
            <input type="email" name="email" class="input input-bordered w-full max-w-md">
        </div>

        <div class="w-full max-w-md pt-2">
            <button type="submit" class="btn btn-primary w-full">Request Password Reset</button>
        </div>

        {#if form?.success}
        <div role="alert" class="alert alert-success w-full max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>An email has been sent to reset your password!</span>
          </div>
        {/if}

    </form>
    <p class="text-center mt-4">
        We'll send you an email with a link to reset your password.
    </p>
</div>