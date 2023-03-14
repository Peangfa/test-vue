<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" style="background-color: #FDE10A;">
      <v-img style="padding: 20px;" src="./assets/logoweserve1.png"></v-img>
      <!-- <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="" value="หน้าหลัก" to="/home">หน้าหลัก</v-list-item>
        <v-list-item prepend-icon="mdi-account-arrow-right" title="" value="การเข้างาน"
          to="/checkin">การเข้างาน</v-list-item>
        <v-list-item prepend-icon="mdi-folder-account" title="" value="ข้อมูลพนักงาน"
          to="/employee">ข้อมูลพนักงาน</v-list-item> -->


        
        <v-list v-model:opened="open">
          <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
          <v-list-item prepend-icon="mdi-account-arrow-right" title="การเข้างาน"  to="/checkin"></v-list-item>
          <v-list-item prepend-icon="mdi-folder-account" title="ข้อมูลพนักงาน" to="/employee"></v-list-item>

      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          ></v-list-item>
        </template>
        <div>
          
        </div>

       
         
            <v-list-item
              v-bind="props"
              title="ยื่นลา"
            to="/Leave"></v-list-item>
         
            <v-list-item
              v-bind="props"
              title="ประวัติการลา"
            to="/history"></v-list-item>
      </v-list-group>
    </v-list>




<!-- 
      </v-list> -->

    </v-navigation-drawer>

    <v-app-bar style="background-color: #333333;">
      <v-app-bar-nav-icon style="color: white;" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="color: white;">HUMAN RESOUCES</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">{{ user.initials }}</v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">{{ user.initials }}</v-img>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>

              <v-btn prepend-icon="mdi-account" to="/profile" rounded variant="text">
                Profile
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn prepend-icon="mdi-logout" to="/" rounded variant="text">
                Logout
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: null,

    user: {
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
    open: ['Users'],
    admins: [],
    cruds: [],

  }),
}
</script>
