<script>
    import { Input, Modal} from "$lib/components"

    export let form
    export let data

    let emailModalOpen;
    let usernameModalOpen;

    $: emailModalOpen = false;
    $: usernameModalOpen = false;

</script>

<div class="flex flex-col w-full h-full space-y-12">
    <div class="w-full">
        <h3 class="text-2xl font-medium">Change Email</h3>
        <div class="divider"></div>
        <Modal label="change-email" checked={emailModalOpen}>
            <span slot="trigger" class="btn btn-primary">Change Email</span>
            <h3 slot="heading">Change Your Email</h3>
            <form action="?/updateEmail" method="POST" class="space-y-2">
                <Input id="email" type="email" label="Enter your new email address" required={true} value={form?.data?.email}></Input>
                <button type="submit" class="btn btn-primary w-full">Change My Email</button>
            </form>
        </Modal>
    </div>

    <div class="w-full">
        <h3 class="text-2xl font-medium">Change Username</h3>
        <div class="divider mb-0.5"></div>
        <Input id="username" label="Username" value={data?.user?.username} disabled></Input>
        <Modal label="change-username" checked={usernameModalOpen}>
            <span slot="trigger" class="btn btn-primary">Change Username</span>
            <h3 slot="heading">Change Your Username</h3>
            <form action="?/updateUsername" method="POST" class="space-y-2">
                <Input id="username" type="text" label="Enter your new username" required={true} value={form?.data?.username}></Input>
                <button type="submit" class="btn btn-primary w-full">Change My Username</button>
            </form>
        </Modal>
    </div>
</div>