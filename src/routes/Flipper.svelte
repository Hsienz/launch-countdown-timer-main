<script lang="ts">
	export let countdown: number;
	export let tag: string
	const fillDigit = (a: number, b: number) => {
		let res = a.toString();
		return "0".repeat(b - res.length) + res;
	};
</script>

<div class="flex flex-col items-center gap-4">
	<div
		class="relative text-Soft_red text-[32px] md:text-[64px] select-none flex flex-col items-center md:w-32 w-16 aspect-square rounded-md overflow-hidden shadow-Very_dark_blue_black shadow-[0_6px_0_-2px]"
	>
		<div
			class="bg-Dark_desaturated_blue brightness-75 overflow-hidden flex w-full justify-center h-1/2"
		>
			<p class="translate-y-1/2 flex mt-auto">
				{fillDigit(countdown, 2)}
			</p>
		</div>
		<div
			class="flex justify-between -translate-y-1/2 absolute w-full top-1/2 z-10"
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
			<p class="-translate-y-1/2 mb-auto">{fillDigit(countdown, 2)}</p>
		</div>
	</div>
	<p class="text-Grayish_blue text-xs md:text-sm md:tracking-[0.2rem]">{tag}</p>
</div>
