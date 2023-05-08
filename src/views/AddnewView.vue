<template>
    <div class="Add">
    <Add/>
</div>
  </template>

  
  <script>

import { defineComponent } from 'vue';
  // Components
import Add from '../components/Add.vue';

  export default defineComponent({
    name: 'AddnewView',
  
    components: {
   Add,
},
  });
  </script>