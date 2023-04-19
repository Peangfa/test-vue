<template>
    <div class="Addemploy">
    <Addemploy/>
</div>
  </template>

  
  <script>

import { defineComponent } from 'vue';
  // Components
  
import Addemploy from '@/components/Addemploy.vue';
  export default defineComponent({
    name: 'AddView',
  
    components: {
 
   Addemploy
},
  });
  </script>