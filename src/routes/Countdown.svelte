<script lang="ts">
	import { onDestroy, onMount } from "svelte";
    import { countdown, from, tags } from "./store";
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

<div class="flex gap-4 md:gap-8">
    {#each expand($countdown,from) as x,i}
        <Flipper countdown={x} tag={tags[i]}/>
    {/each}
</div>