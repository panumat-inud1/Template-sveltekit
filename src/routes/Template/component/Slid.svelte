<script lang="ts">
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import Slider from '@smui/slider';

	export let value;
</script>

<p>{value}</p>
<Slider disabled {value} min={0} max={100} />
