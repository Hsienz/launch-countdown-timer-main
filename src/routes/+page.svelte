<script>
	import Countdown from "./Countdown.svelte";
	import Footer from "./Footer.svelte";
</script>

<div
	class="min-h-screen relative w-screen flex flex-col items-center bg-Very_dark_blue min-w-[375px]
before:absolute before:content-[''] before:w-full before:h-full before:bg-[url('$lib/images/bg-stars.svg')] before:bg-no-repeat before:bg-cover
after:content-[''] after:w-full after:absolute after:bg-bottom after:bg-[url('$lib/images/pattern-hills.svg')] after:bg-no-repeat after:md:bg-contain after:h-full"
>
	<div class="z-10 grid h-screen justify-items-center p-8 text-center">
		<h1 class="uppercase text-White text-2xl tracking-widest row-start-2">
			We're launching soon
		</h1>
		<div class="row-start-3"><Countdown /></div>
		<div class="row-start-6"><Footer /></div>
	</div>
</div>
