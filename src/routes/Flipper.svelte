<script lang="ts">
    export let front:string
    export let back:string
</script>
<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<p>{front}</p>
		</div>
		<div class="flip-card-back">
			<p>{back}</p>
		</div>
	</div>
</div>

<style lang="postcss">
    .flip-card {
		position: absolute;
		width: 100%;
		height: 100%;
		perspective: 200px;
        z-index: 20;
	}
	.flip .flip-card .flip-card-inner {
		transform: rotateX(-180deg);
        transition: 700ms;
	}
	.flip-card-front,
	.flip-card-back {
		width: 100%;
		height: 100%;
		position: absolute;
		backface-visibility: hidden;
		display: flex;
		justify-content: center;
        overflow: hidden;
        background-color: theme(colors.Dark_desaturated_blue);
	}
	.flip-card-back {
		transform: rotateX(180deg);
		align-items: flex-start;
	}
    .flip-card-back p {
        transform: translateY(-50%);
    }
    .flip-card-front p {
        transform: translateY(50%);
    }
	.flip-card-front {
		align-items: flex-end;
        filter: brightness(75%)
	}
	.flip-card-inner {
		transform-style: preserve-3d;
		width: 100%;
		height: 100%;
		transform-origin: bottom;
        transition-duration: 0s;
	}
</style>
