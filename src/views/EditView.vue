<template>
    <div class="Edit">
    <Edit />
</div>
  </template>

  
  <script>

import { defineComponent } from 'vue';
  // Components
  import Edit from '../components/Edit.vue';
  export default defineComponent({
    name: 'EditView',
  
    components: {
    Edit,
},
  });
  </script>