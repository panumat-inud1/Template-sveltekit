<script>
    import { t } from '$lib'; 
    import Card, {
   Content,
   PrimaryAction,
   Actions,
   ActionButtons,
   ActionIcons,
 } from '@smui/card';
 import IconButton, { Icon } from '@smui/icon-button';
  
 export let roomNo;
 export let isClean;
 export let isAvaiable;
 export let haveMessage;
 
</script>

<div class="card-container">
    <Card>
      <Content style="text-align:left">
          <h3 style="padding-bottom: 5px; border-bottom: 1px solid #bba">{$t('room.title')} {roomNo}</h3>
      </Content>

      <Actions style="justify-content: right;">
        <IconButton
        toggle bind:pressed={isClean}
          aria-label="Add to favorites"
          title="isClean"
        >
          <Icon class="material-icons" on>favorite</Icon>
          <Icon class="material-icons">favorite_border</Icon>
        </IconButton>
        {#if isAvaiable}
            <IconButton
            class="material-icons"
            title="Share">download_done</IconButton
            >
        {/if}
        
        {#if haveMessage}
        <IconButton
            class="material-icons"
            title="Share">mail_outline</IconButton
        >
        {/if}
        
        <IconButton
          class="material-icons"
          title="More options">more_vert</IconButton
        >
      </Actions>
      
    </Card>
  </div>

