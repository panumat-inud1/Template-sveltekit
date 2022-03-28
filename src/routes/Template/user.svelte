<script>
	import { t } from '$lib';
	import Button, { Label, Icon } from '@smui/button';
	import Checkbox from '@smui/checkbox';
	import Card from '@smui/card';
	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import Textfield from '@smui/textfield';
	import Select, { Option } from '@smui/select';
	import LayoutGrid from '@smui/layout-grid/src/LayoutGrid.svelte';

	let searchTel = '';
	let searchTaxId = '';
	let searchName = '';
	let selected = [];
	let updateIndex = -1;
	let user = {
		id: '',
		titleName: '',
		name: '',
		surname: '',
		fullname: '',
		gender: '',
		taxId: '',
		birthDate: '',
		tel: '',
		postcode: '',
		addr: '',
		province: ''
	};
	let users = [
		{
			id: 1,
			titleName: 'นาย',
			name: 'สันติ',
			surname: 'สุขสบาย',
			gender: 'ชาย',
			taxId: '1234567890',
			birthDate: '01/01/2550',
			tel: '089-9888999',
			postcode: '52210',
			addr: '12 หมู่3 ทุ่งงาม เสริมงาม ลำปาง'
		},
		{
			id: 2,
			titleName: 'นาง',
			name: 'สมหวัง',
			surname: 'ดั่งใจนึก',
			gender: 'หญิง',
			taxId: '0987654321',
			birthDate: '01/01/2545',
			age: '20',
			tel: '088-8888999',
			postcode: '52210',
			addr: '12 หมู่3 ทุ่งงาม เสริมงาม ลำปาง'
		}
	];

	let open = false;

	$: dataFilter = users.filter(
		(o) =>
			(o.name.indexOf(searchName) !== -1 || o.surname.indexOf(searchName) !== -1) &&
			o.taxId.indexOf(searchTaxId) !== -1 &&
			o.tel.indexOf(searchTel) !== -1
	);

	function closeHandler(e) {
		switch (e.detail.action) {
			case 'save': {
				if (updateIndex == -1) {
					users = [...users, user];
				} else {
					users[updateIndex] = user;
				}

				user = {};
				break;
			}
		}
		updateIndex = -1;
		open = false;
	}

	function deleteData() {
		selected.forEach((o) => {
			let i = users.indexOf(o);
			users.splice(i, 1);
			users = users;
		});
	}

	function update(data) {
		updateIndex = users.indexOf(data);
		user = data;
		open = true;
	}

	let currentDate = new Date();

	const onDateChange = (d) => {
		currentDate = d.detail;
	};
</script>
<div class="container-card">
	<Card>
		<h4 style="text-align: left; padding-bottom: 10px; margin: 20px; border-bottom: 2px solid #bbb">
			{$t('page')} : {$t('user.title')}
		</h4>
		<span style="text-align: right">
			<Button
				variant="raised"
				color="secondary"
				style="padding: 5px;margin-right: 10px;"
				on:click={() => (open = true)}
			>
				<Icon class="material-icons">add</Icon>
				<Label>{$t('btn.add')}</Label>
			</Button>
			<Button
				variant="raised"
				color="secondary"
				style="padding: 5px;margin-right: 10px;"
				on:click={deleteData}
			>
				<Icon class="material-icons">delete</Icon>
				<Label>{$t('btn.delete')}</Label>
			</Button>
		</span>
		
			
				<Card style="margin: 10px 10px 0px 20px;text-align:left; padding: 20px;">
					<h5 style="padding-bottom: 5px;border-bottom: 1px solid #bba">{$t('user.search')}</h5>
					<Cell>
						<Textfield
							style="width: 250px;"
							bind:value={searchName}
							label=" {$t('user.searchName')}"
						/>
						<Textfield
							style="width: 250px;"
							bind:value={searchTaxId}
							label=" {$t('user.searchTaxId')}"
						/>
						<Textfield
							style="width: 250px;"
							bind:value={searchTel}
							label=" {$t('user.searchTel')}"
						/>
					</Cell>
				</Card>
		
	
	
		<DataTable style="margin: 10px;">
			<Head>
				<Row>
					<Cell checkbox>
						<Checkbox />
					</Cell>
					<Cell>{$t('user.gender')}</Cell>
					<Cell>{$t('user.fullname')}</Cell>
					<Cell>{$t('user.taxid')}</Cell>
					<Cell>{$t('user.birthdate')}</Cell>
					<Cell>{$t('user.tel')}</Cell>
					<Cell />
				</Row>
			</Head>
			<Body>
				{#each dataFilter as user (user.id)}
					<Row>
						<Cell checkbox>
							<Checkbox bind:group={selected} value={user} valueKey={user.id} />
						</Cell>
						<Cell>{user.gender}</Cell>
						<Cell>{user.titleName} {user.name} {user.surname}</Cell>
	
						<Cell>{user.taxId}</Cell>
						<Cell>{user.birthDate}</Cell>
						<Cell>{user.tel}</Cell>
						<Cell on:click={update(user)}>
							<Icon class="material-icons">edit</Icon>
						</Cell>
					</Row>
				{/each}
			</Body>
		</DataTable>
	</Card>
</div>


<Dialog bind:open aria-labelledby="fullscreen-title" on:SMUIDialog:closed={closeHandler}>
	<Header style="border-bottom: 1px solid #bbb;">
		<Title id="fullscreen-title">{$t('user.addUser')}</Title>
	</Header>
	<Content>
		<div style="text-align: left;">
			<div>
				<Select bind:value={user.gender} label={$t('user.gender')}>
					<Option value="ชาย">{$t('gender.mail')}</Option>
					<Option value="หญิง">{$t('gender.femail')}</Option>
				</Select>
				<Select bind:value={user.titleName} label={$t('user.titleName')}>
					<Option value="นาย">{$t('title.mr')}</Option>
					<Option value="นางสาว">{$t('title.ms')}</Option>
					<Option value="นาง">{$t('title.mrs')}</Option>
				</Select>
				<Textfield style="width: 250px;" bind:value={user.name} label=" {$t('user.name')}" />
				<Textfield style="width: 250px;" bind:value={user.surname} label=" {$t('user.surname')}" />
			</div>
			<div>
				<Textfield type="date" bind:value={user.birthDate} label=" {$t('user.birthdate')}" />
			</div>
			<div>
				<Textfield bind:value={user.taxId} label=" {$t('user.taxid')}" />
				<Textfield bind:value={user.tel} label=" {$t('user.tel')}" />
			</div>
			<div>
				<Textfield style="width: 500px;" bind:value={user.addr} label=" {$t('user.addr')}" />
			</div>
		</div>
	</Content>
	<Actions style="text-align:right">
		<Button action="save" defaultAction>
			<Label>{$t('btn.save')}</Label>
		</Button>
		<Button action="cancel">
			<Label>{$t('btn.cancel')}</Label>
		</Button>
	</Actions>
</Dialog>

<style>
.container-card{
	margin-top: 2%;
	margin-left: 5%;
	margin-right: 5%;
	
}
</style>