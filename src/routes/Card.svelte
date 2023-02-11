<script lang="ts">
	import { onMount,afterUpdate, beforeUpdate, tick } from "svelte";
	import Countdown from "./Countdown.svelte";
	import Flipper from "./Flipper.svelte";

	export let countdown: number;
	export let tag: string;
	$: countdownStr = fillDigit(countdown,2)
	let prevCountdown: number = countdown + 1;
	$: prevCountdownStr = fillDigit(prevCountdown,2)
	let div:HTMLDivElement;
	const fillDigit = (a: number, b: number) => {
		let res = a.toString();
		return "0".repeat(b - res.length) + res;
	};
	beforeUpdate(async() => {
		await tick()
		if(div) div.classList.add('flip')
		prevCountdown = countdown+1;
	});
	afterUpdate(async() => {
		setTimeout(() => {
			div.classList.remove('flip')
		},980);
		await tick()
	});
</script>

<div class="flex flex-col items-center gap-4" bind:this={div}>
	<div
		class="relative text-Soft_red text-[32px] md:text-[64px] select-none flex flex-col items-center md:w-32 w-16 aspect-square rounded-md overflow-hidden shadow-Very_dark_blue_black shadow-[0_6px_0_-2px]"
	>
		<div class="absolute top-0 left-0 w-full h-1/2">
			<Flipper front={prevCountdownStr} back={countdownStr}/>
		</div>
		<div
			class="bg-Dark_desaturated_blue brightness-75 overflow-hidden flex w-full justify-center h-1/2"
		>
			<p class="translate-y-1/2 flex mt-auto">
				{countdownStr}
			</p>
		</div>
		<div
			class="flex justify-between -translate-y-1/2 absolute w-full top-1/2 z-30"
		>
			<div
				class=" bg-Very_dark_blue left-0 -translate-x-1/2 w-2 aspect-square rounded-full"
			/>
			<div
				class=" bg-Very_dark_blue right-0 translate-x-1/2 w-2 aspect-square rounded-full"
			/>
		</div>
		<div
			class="bg-Dark_desaturated_blue relative overflow-hidden flex w-full justify-center h-1/2"
		>
			<p class="-translate-y-1/2 mb-auto">{prevCountdownStr}</p>
		</div>
	</div>
	<p class="text-Grayish_blue text-xs md:text-sm md:tracking-[0.2rem]">
		{tag}
	</p>
</div>
