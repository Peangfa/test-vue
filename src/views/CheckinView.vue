<template>
    <div class="Checkin">
        <Checkin/>
    </div>
</template>

<script>
  import { defineComponent } from 'vue';
  
  // Components
  import Checkin from '../components/Checkin.vue';
  
  export default defineComponent({
    name: 'CheckinView',
  
    components: {
      Checkin,
    },
  });
  </script>
  

<style>
    
</style>