<script lang="ts">
    export let text: string = "";
    let visible: boolean = false;

    function show() {
        visible = true;
    }

    function hide() {
        visible = false;
    }
</script>

<div class="tooltip relative flex flex-col items-center cursor-pointer" on:mouseover={show} on:mouseout={hide}
     on:focus={show} on:blur={hide} role="tooltip">
    <slot></slot>
    <div class="tooltip-text w-[320px] bg-black text-white text-center rounded p-1 absolute bottom-[125%] z-1 transition-opacity duration-300 {visible ? 'visible opacity-1' : 'invisible opacity-0'}">
        {text}
    </div>
</div>
