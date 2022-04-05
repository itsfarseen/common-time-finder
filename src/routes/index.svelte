<script>
	import Item from "../item.svelte";
	let items = [
		{
			name: "Bolt",
			offset: [5, 30],
			start: [8, 0],
			end: [21, 0],
		},
		{
			name: "Penny",
			offset: [1, 0],
			start: [8, 0],
			end: [21, 0],
		},
	];
	
	function add() {
		items = [...items, {
			name: "User",
			offset: [0, 0],
			start: [8, 0],
			end: [21, 0],
		}];
	}

	let common_start_utc = [0, 0], common_end_utc = [0, 0];
	let time_found = true;

	$: {
		let start_max = 0;
		let end_min = 24*60 - 1;
		for(let item of items) {
			let offset = item.offset[0]*60 + item.offset[1];
			let start = item.start[0]*60 + item.start[1];
			let end = item.end[0]*60 + item.end[1];

			start -= offset;
			end -= offset;

			start_max = Math.max(start_max, start);  
			end_min = Math.min(end_min, end);  
		}

		time_found = start_max < end_min;
		common_start_utc = [Math.floor(start_max/60), start_max%60];
		common_end_utc = [Math.floor(end_min/60), end_min%60];
	}

	function pad(n) {
		return String(n).padStart(2, '0');
	}
</script>
<div class="main">
	<div class="header">
		<h1 class="title">Common time finder</h1>
		<h2 class="title">Common time (UTC): 
			{#if time_found }
				{pad(common_start_utc[0])}:{pad(common_start_utc[1])} -		
				{pad(common_end_utc[0])}:{pad(common_end_utc[1])} 
			{:else}
				No common time found
			{/if}
		</h2>
	</div>
	<div class="items">
	{#each items as item }
		<Item bind:item={item}/>
	{/each}
	</div>
	<button class="add-btn" on:click={add}>Add</button>
</div>

<style>
	:global(body) {
		margin: 0; padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {margin: 0 0;}
	h2 {margin: 0 0;}

	.main {
		font-family: sans-serif;
		display: flex;
		flex-direction: column;
		padding: 1rem 0;
		margin: 0;
		gap: 1rem;
		width: 65rem;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 1rem 0;
	}

	.header > .title {
		text-transform: uppercase;
		padding: 0 1rem;
	}

	.items {
		display: flex;
		flex-direction: column;
	}

	.items > :global(*:first-child) {
		border-top: 1px solid #999;
	}

	.items > :global(*:last-child) {
		border-bottom: 1px solid #999;
	}

	.items > :global(*+*) {
		border-top: 1px solid #999;
	}

	.add-btn {
		padding: 0.5rem;
	}
</style>

