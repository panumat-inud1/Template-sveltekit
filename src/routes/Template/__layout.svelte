<script>
import Navbar from "./component/navbar.svelte";

	
</script>

<Navbar/>

<section class="content">
	<slot />
</section>

<!-- border: 1px solid 
style=" var(--mdc-theme-secondary, #333);padding-top:70px;align-items: center;"
-->
<style>
	
	.content {
		width: 100%;
		height: auto;
	
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
