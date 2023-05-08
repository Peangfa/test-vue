<template>
    <div class="Leave">
    <Leave />
    
</div>
  </template>

  
  <script>
  import { defineComponent } from 'vue';
  // Components
  import Leave from '../components/Leave.vue';
 
  
  export default defineComponent({
    name: 'LeaveView',
  
    components: {
      Leave,
    

    },
  });
  </script>