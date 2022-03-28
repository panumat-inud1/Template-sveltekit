<script lang="ts">
	import { t } from '$lib';
	import Card, { Content, PrimaryAction, Media, MediaContent, Actions } from '@smui/card';
	import Cell from '@smui/layout-grid/src/Cell.svelte';
	import InnerGrid from '@smui/layout-grid/src/InnerGrid.svelte';
	import LayoutGrid from '@smui/layout-grid/src/LayoutGrid.svelte';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';

	let userName = '';
	let password = '';

	function login() {
		if (userName == 'admin' && password == '1234') {
			window.location.href = '/Template';
		} else {
			//	alert('Username and Password false');
			open = true;
		}
	}

	/*	export async function login({ session }) {
        const { user } = session;

        if (! user) {
            return {
                status: 302,
                redirect: "/Template"
            };
        }

        return {
			
			
		};
    } */
	import Dialog from '@smui/dialog';

	let open = false;
</script>

<svelte:head>
	<title>Login Page</title>
</svelte:head>

<div style="text-align: right;">
	<IconButton class="material-icons">home</IconButton>
</div>

<div class="container">
	<LayoutGrid fixedColumnWidth>
		<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 6 }}>
			<Card style="padding:1%;">
				<Cell Span={12}>
					<table>
						<tr style="text-align: center;">
							<td>
								<img src="/static/favicon.png" alt="" sizes="" width="40" height="40" srcset="" />
							</td>
							<td><h3>Hotel System</h3> </td>
						</tr>
					</table>
				</Cell>

				<Cell span={12}>
					<InnerGrid>
						<Cell span={6} style="text-align: center;">
							<img
								src="/static/hotel-home.png"
								alt=""
								sizes=""
								class="imd-medie"
								srcset=""
							/>
						</Cell>

						<Cell span={6}>
							<Cell span={12}>
								<InnerGrid>
									<Cell span={12}>
										<Textfield bind:value={userName} label=" {$t('login.username')}">
											<Icon class="material-icons" slot="leadingIcon">person</Icon>
										</Textfield>
									</Cell>
									<Cell span={12}>
										<Textfield
											bind:value={password}
											label=" {$t('login.password')}"
											type="password"
										>
											<Icon class="material-icons" slot="leadingIcon">key</Icon>
										</Textfield>
									</Cell>

									<Cell span={12} class="d" style="padding-bottom: 5%;"> 
										<Button color="primary" variant="unelevated" on:click={login}>
											<Label>Login</Label>
										</Button>
									</Cell>

								</InnerGrid>
							</Cell>
						</Cell>
					</InnerGrid>
				</Cell>
				<Cell span={12}>
					<div class="item-foot" /></Cell
				>
			</Card>
		</Cell>
	</LayoutGrid>
</div>

<Dialog bind:open aria-labelledby="default-focus-title" aria-describedby="default-focus-content">
	<Content id="default-focus-content">
		<h3 style="color: red;">Username and password are incorrect!!</h3>
	</Content>
</Dialog>

<p style="text-align: center;">© 2022 Skote. Crafted with by Panumat inud</p>

<style>
	.container {
		text-align: center;
		margin-top: 5%;
	}
	.imd-medie{
		width: 90%;
		height: 320px;
	}
	


	@media only screen and (max-width: 480px) {
		

		.imd-medie{
		width: 90%;
		height: 200px;
	}
	
	}
</style>
