<script>
	export let item;

	let start_utc, end_utc;

	$: {
		let offset = item.offset[0]*60 + item.offset[1];
		let start = item.start[0]*60 + item.start[1];
		let end = item.end[0]*60 + item.end[1];

		start -= offset;
		end -= offset;

		start_utc = [Math.floor(start/60), start % 60];
		end_utc = [Math.floor(end/60), end % 60];
	}

</script>

<div class="main">
	<div class="section">
		<h2 class="title">Name</h2>
		<div class="input">
			<input class="name" type=text bind:value={item.name}>
		</div>
	</div>
	<div class="section">
		<h2 class="title">UTC Offset</h2>
		<div class="input">
			<input class="hour" size=1 type=number bind:value={item.offset[0]}>
			:
			<input class="minute" size=1 type=number bind:value={item.offset[1]}>
		</div>
	</div>
	<div class="section">
		<h2 class="title">Start Time</h2>
		<div class="input">
			<input class="hour" size=1 type=number bind:value={item.start[0]}>
			:
			<input class="minute" size=1 type=number bind:value={item.start[1]}>
		</div>
	</div>
	<div class="section">
		<h2 class="title">End Time</h2>
		<div class="input">
			<input class="hour" size=1 type=number bind:value={item.end[0]}>
			:
			<input class="minute" size=1 type=number bind:value={item.end[1]}>
		</div>
	</div>
	<div class="section">
		<h2 class="title">Start Time UTC</h2>
		<div class="input">
			<input class="hour" size=1 type=number bind:value={start_utc[0]}>
			:
			<input class="minute" size=1 type=number bind:value={start_utc[1]}>
		</div>
	</div>
	<div class="section">
		<h2 class="title">End Time UTC</h2>
		<div class="input">
			<input class="hour" size=1 type=number bind:value={end_utc[0]}>
			:
			<input class="minute" size=1 type=number bind:value={end_utc[1]}>
		</div>
	</div>
</div>


<style>
	.main {
		display: flex;
		gap: 2em;

		padding: 1rem;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.section .title {
		margin: 0;
		font-size: 0.8rem;
	}

	input.hour, input.minute {
		width: 2em;
		padding: 0.5em 0.2em;
		font-size: 1.2rem;
	}

	input.name {
		padding: 0.5em 0.2em;
		font-size: 1.2rem;
	}
</style>
