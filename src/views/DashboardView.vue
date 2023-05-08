<template>
    <dashboard/>
  </template>
  
  <script>
  
import { defineComponent } from 'vue';
  
  // Components
  import dashboard from '../components/dashboard.vue';

  export default defineComponent({
    name: 'DashboardView',
  
    components: {
      dashboard,
},
  });
  </script>
  