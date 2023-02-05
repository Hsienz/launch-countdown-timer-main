import { compress } from "$lib/convert"
import { writable } from "svelte/store"

const createCountdown = (countdown:number) => {
    const {subscribe,update} = writable(countdown)

    return {
        subscribe,
        countdown: () => { update(n=>n-1) }
    }
}

const init = [8,23,55,41]
export const from = [24,60,60]

export const countdown = createCountdown(compress(init,from))