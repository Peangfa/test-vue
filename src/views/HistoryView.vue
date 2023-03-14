<template>
    <History />
  </template>
  
  <script>
  
import { defineComponent } from 'vue';
  
  // Components
  import History from '@/components/History.vue';
  export default defineComponent({
    name: 'HistoryView',
  
    components: {
    History,
},
  });
  </script>
  