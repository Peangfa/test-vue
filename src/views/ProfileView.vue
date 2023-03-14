<template>
    <div class="Profile">
    <Profile />
</div>
  </template>

  
  <script>

import { defineComponent } from 'vue';
  // Components
  import Profile from '@/components/profile.vue';
  export default defineComponent({
    name: 'ProfileView',
  
    components: {
    Profile,
},
  });
  </script>