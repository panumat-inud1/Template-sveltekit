<script>
	import { t } from '$lib';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Room from '../Template/component/Room.svelte';
	import Card from '@smui/card';
	import Textfield from '@smui/textfield';

	import { Input } from '@smui/textfield';
	import Paper from '@smui/paper';
	import { Icon } from '@smui/common';

	$: dataFilter = rooms.filter((o) => o.no.indexOf(searchRoom) !== -1);

	let searchRoom = '';

	let rooms = [
		{
			floor: 1,
			no: '101',
			isClean: false,
			isAvaliable: true,
			haveMessage: false
		},
		{
			floor: 1,
			no: '102',
			isClean: true,
			isAvaliable: false,
			haveMessage: false
		},
		{
			floor: 1,
			no: '103',
			isClean: true,
			isAvaliable: true,
			haveMessage: false
		},
		{
			floor: 2,
			no: '201',
			isClean: true,
			isAvaliable: true,
			haveMessage: false
		},
		{
			floor: 2,
			no: '202',
			isClean: true,
			isAvaliable: false,
			haveMessage: true
		},
		{
			floor: 2,
			no: '203',
			isClean: false,
			isAvaliable: false,
			haveMessage: false
		}
	];
</script>

<LayoutGrid>
	<Cell span={12}>
		
			<div class="solo-demo-container solo-container">
				<Paper class="solo-paper" elevation={6}>
					<Icon class="material-icons">search</Icon>
					<Input bind:value={searchRoom} placeholder={$t('room.searchRoom')} class="solo-input" />
				</Paper>
			</div>
	
	</Cell>
	{#each dataFilter as room}
		<Cell>
			<Room
				roomNo={room.no}
				isClean={room.isClean}
				isAvaiable={room.isAvaliable}
				haveMessage={room.haveMessage}
			/>
		</Cell>
	{/each}
</LayoutGrid>

<style>
	.solo-demo-container {
		padding: 36px 18px;
		background-color: var(--mdc-theme-background, #f8f8f8);
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
	}

	.solo-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	* :global(.solo-paper) {
		display: flex;
		align-items: center;
		flex-grow: 1;
		max-width: 600px;
		margin: 0 12px;
		padding: 0 12px;
		height: 48px;
	}
	* :global(.solo-paper > *) {
		display: inline-block;
		margin: 0 12px;
	}
	* :global(.solo-input) {
		flex-grow: 1;
		color: var(--mdc-theme-on-surface, #000);
	}
	* :global(.solo-input::placeholder) {
		color: var(--mdc-theme-on-surface, #000);
		opacity: 0.6;
	}
	* :global(.solo-fab) {
		flex-shrink: 0;
	}
</style>
