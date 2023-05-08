<template>
    <div class="Add">
    <Add />
    <div class="Addemploy">
    <Addemploy/>
</div>
  </template>

  
  <script>

import { defineComponent } from 'vue';
  // Components
import Add from '../components/Add.vue';
import Addemploy from '@/components/Addemploy.vue';
  export default defineComponent({
    name: 'AddView',
  
    components: {
    Add,
 
   Addemploy
},
  });
  </script>