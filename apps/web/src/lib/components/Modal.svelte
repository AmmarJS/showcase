<script>
    export let label
    export let checked
</script>

<label for={label}>
    <slot name="trigger"></slot>
</label>

<input type="checkbox" id={label} class="modal-toggle" {checked}>
<label for={label} class="modal modal-bottom sm:modal-middle">
    <label for="" class="modal-box">
        <div class="font-bold text-xl text-center">
            <slot name="heading"></slot>
        </div>
        <div class="my-2">
            <slot></slot>
        </div>
        <div class="modal-action justify-center">
            <slot name="actions"></slot>
        </div>
    </label>
</label>