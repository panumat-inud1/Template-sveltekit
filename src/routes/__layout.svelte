<script>
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';

</script>


<slot />



<style>
	.container {
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
		background-color: black;
	}

	.content {
		width: 100%;
		height: auto;
		background: rgb(168, 166, 166);
		padding-top: 65px;
	}

	@media only screen and (max-width: 480px) {
		.content {
			width: 100%;
			height: auto;
			background: rgb(12, 11, 11);
			padding-top: 55px;
		}
	}
</style>
