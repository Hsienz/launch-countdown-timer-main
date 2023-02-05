<script lang="ts">
    export let countdown:number
    $: if(countdown) {
        console.log(1)
    }
</script>

<p>{countdown}</p>