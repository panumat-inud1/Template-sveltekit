<script lang="ts">
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton, { Icon } from '@smui/icon-button';
	import { t } from '$lib';
	export let topAppBar: TopAppBarComponentDev;
	let initialOn = true;

	//Drawer
	import Drawer, { AppContent, Content, Header, Subtitle, Scrim } from '@smui/drawer';
	import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
	import { H6 } from '@smui/common/elements';

	import LocaleSwitcher from '../component/LocaleSwitcher.svelte';

	let open = false;
	let setting = false;
	let active = 'Inbox';

	function setActive(value: string) {
		active = value;
		open = false;
		window.location.href = value;
	}

	//TopAppBar
</script>

<svelte:head>
	<!-- SMUI Styles -->
	{#if initialOn == false}
		<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
	{/if}
</svelte:head>

<Drawer variant="modal" fixed={true} bind:open>
	<div class="drawer-head">
		{#if open == true}
			<IconButton on:click={() => (open = !open)} class="material-icons">login</IconButton>
		{/if}
	</div>

	<Content>
		<List>
			<Separator />
			<Subheader component={H6}>Menu</Subheader>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('home')}
				activated={active === 'home'}
			>
				<Graphic class="material-icons" aria-hidden="true">home</Graphic>
				<Text>{$t('menus.menu1')}</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('user')}
				activated={active === 'user'}
			>
				<Graphic class="material-icons" aria-hidden="true">person</Graphic>
				<Text>{$t('menus.menu2')}</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('room')}
				activated={active === 'room'}
			>
				<Graphic class="material-icons" aria-hidden="true">hotel</Graphic>
				<Text>{$t('menus.menu3')}</Text>
			</Item>

			<Item
				href="javascript:void(0)"
				on:click={() => setActive('calendar')}
				activated={active === 'calendar'}
			>
				<Graphic class="material-icons" aria-hidden="true">movie</Graphic>
				<Text>{$t('menus.menu4')}</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('test2')}
				activated={active === 'test2'}
			>
				<Graphic class="material-icons" aria-hidden="true">bathroom</Graphic>
				<Text>{$t('menus.menu5')}</Text>
			</Item>
			<Item href="javascript:void(0)" on:click={() => setActive('/')} activated={active === '/'}>
				<Graphic class="material-icons" aria-hidden="true">login</Graphic>
				<Text>{$t('menus.menu6')}</Text>
			</Item>
		</List>
	</Content>
</Drawer>

<!-- <Scrim fixed={true} /> -->

<AppContent>
	<TopAppBar bind:this={topAppBar} variant="standard">
		<Row>
			<Section>
				{#if open == false}
					<IconButton on:click={() => (open = !open)} class="material-icons">menu</IconButton>
				{/if}
			</Section>

			<Section align="end" toolbar>
				{#if open == false}
					<p>{$t('user.u')}</p>
					<LocaleSwitcher />
					<IconButton toggle bind:pressed={initialOn} title={initialOn ? 'Light on.' : 'Lights of'}>
						<Icon class="material-icons" on>light</Icon>
						<Icon class="material-icons">sunny</Icon>
					</IconButton>
					<IconButton on:click={() => (setting = !setting)} class="material-icons"
						>settings
					</IconButton>
				{/if}
				{#if open == true}
					<div class="tab-icon">
					
						<LocaleSwitcher />
						<IconButton
							toggle
							bind:pressed={initialOn}
							title={initialOn ? 'Light on.' : 'Lights of'}
						>
							<Icon class="material-icons" on>light</Icon>
							<Icon class="material-icons">sunny</Icon>
						</IconButton>
						<IconButton on:click={() => (setting = !setting)} class="material-icons"
							>settings
						</IconButton>
					</div>
				{/if}
			</Section>
		</Row>
	</TopAppBar>
</AppContent>

<style>
	.drawer-head {
		text-align: right;
		padding-bottom: 4px;
	}

	.tab-icon {
		padding-right: 34%;
	}

	@media only screen and (max-width: 480px) {
		.drawer-head {
			padding: 0;
			margin: 0;
		}
	}
</style>
