<script>
import LayoutGrid ,{Cell} from "@smui/layout-grid";

</script>

<section class="content">
	<div class="header">
		<h1>head</h1>
	</div>
</section>

<LayoutGrid fixedColumnWidth >
	<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>

		<div class="demo-cell" style="height: 80px;">
		  Span 6 on desktop, 4 on tablet, 2 on phone (always half)
		</div>
		
	  </Cell>
</LayoutGrid>

<style>
	.demo-cell {
		height: 60px;
		width: 100%;
		background: #40aed7;
	}
	.header {
		width: 100%;
		height: 120px;
		background: black;
		border-top: 5px solid #40aed7;
	}
	.header:hover {
		width: 100%;
		height: 120px;
		background: rgb(182, 44, 44);
		border-top: 5px solid #40aed7;
	}
</style>
