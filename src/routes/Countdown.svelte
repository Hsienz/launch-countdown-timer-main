<script lang="ts">
	import { onDestroy, onMount } from "svelte";
    import { countdown, from } from "./store";
    import {expand} from '$lib/convert'
    import Flipper from "./Flipper.svelte";
    
    let interval: ReturnType<typeof setInterval> | undefined
    
    onMount(()=>{
        interval = setInterval( ()=>{
            countdown.countdown()
        },1000)
    })
    onDestroy(()=>{
        if(interval) {
            clearInterval(interval)
            interval = undefined
        }
    })
    $: {
        if($countdown == 0) {
            if(interval) {
                clearInterval(interval)
                interval = undefined
            }
        }
    }
</script>

<div>
    {#each expand($countdown,from) as x}
        <Flipper countdown={x}/>
    {/each}
</div>