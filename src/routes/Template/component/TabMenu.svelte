<script lang="ts">
	import LayoutGrid, { Cell, InnerGrid } from '@smui/layout-grid';
	import Tab, { Label } from '@smui/tab';
	import TabBar from '@smui/tab-bar';
	import Clock from './clock.svelte';
	import Ddrr from './ddrr.svelte';
	import Slid from './Slid.svelte';
	let active = 'Home';

	let value = [
		{
			Number: '20'
		},
		{
			Number: '100'
		},
		{
			Number: '40'
		}
	];
</script>

<!--
	  Note: tabs must be unique. (They cannot === each other.)
	-->

<TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
	<!-- Note: the `tab` property is required! -->
	<Tab {tab}>
		<Label>{tab}</Label>
	</Tab>
</TabBar>

<LayoutGrid>
	{#if active == 'Home'}
		<Cell span={6}>
			<Clock />
		</Cell>
		<Cell span={6}>
			<InnerGrid>
				<Cell span={12}>
					{#each value as val}
						<Slid value={val.Number} />
					{/each}
				</Cell>

				<Cell span={6}>
					<div class="item">
						<Ddrr mess="ซ่อมบำรุง" svg="50" />
					</div>
				</Cell>
				<Cell span={6}>
					<div class="item">
						<Ddrr mess="ติดจอง" svg="50" />
					</div>
				</Cell>
				<Cell span={6}>
					<div class="item">
						<Ddrr mess="ห้องทั้งหมด" svg="200" />
					</div>
				</Cell>
				<Cell span={6}>
					<div class="item">
						<Ddrr mess="ห้องว่าง" svg="100" />
					</div>
				</Cell>
			</InnerGrid>
		</Cell>
	{/if}
	{#if active == 'Merchandise'}
		{#each Array(12) as _unused, i}
			<Cell order={10 - i}>
				<div class="demo-cell">Cell {i + 1}</div>
			</Cell>
		{/each}
	{/if}
</LayoutGrid>

<style>
	.demo-cell {
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--mdc-theme-secondary, #333);
		color: var(--mdc-theme-on-secondary, #fff);
	}
	.item {
	
		padding-left: 0;
		text-align: center;
	}
	
</style>
