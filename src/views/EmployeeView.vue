<template>
    <div class="employ">
    <Employ />
</div>
  </template>

  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import Employ from '../components/Employ.vue';
  
  export default defineComponent({
    name: 'Employeeview',
  
    components: {
      Employ,
    },
  });
  </script>
  