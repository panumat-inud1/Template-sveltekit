<script lang="ts">
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	let open = false;
	
	export let mg;
	
    if(mg != ''){
        open = true
    }else{
        open = false
    }
</script>


<Dialog bind:open aria-labelledby="default-focus-title" aria-describedby="default-focus-content">
	
	<Content id="default-focus-content"> 
        {mg}
    </Content>
	
</Dialog>
