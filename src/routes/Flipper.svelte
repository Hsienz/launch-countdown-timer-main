<script lang="ts">
	import { stringify } from "postcss";


	export let countdown: number;
	$: if (countdown) {
		console.log(1);
	}
    const fillDigit = (a:number, b:number) => {
        let res = a.toString()
        return '0'.repeat(b-res.length) + res
    }
</script>

<div class="relative text-Soft_red text-5xl select-none flex flex-col items-center w-24 rounded-md overflow-hidden">
	<div class="bg-Dark_desaturated_blue brightness-75 overflow-hidden flex w-full justify-center">
    <p class="translate-y-1/2 flex">{fillDigit(countdown,2)}</p>
	</div>
    <div class="flex justify-between -translate-y-1/2 absolute w-full top-1/2">
        <div class=" bg-red-500 left-0 -translate-x-1/2 w-2 aspect-square rounded-full"></div>
        <div class=" bg-red-500 right-0 translate-x-1/2 w-2 aspect-square rounded-full"></div>
    </div>
	<div class="bg-Dark_desaturated_blue overflow-hidden flex w-full justify-center">
		<p class="-translate-y-1/2 flex">{fillDigit(countdown,2)}</p>
	</div>
</div>
