<template>
  <v-app >
    <v-navigation-drawer v-model="drawer" style="background-color: #FDE10A; display: block;al" v-if="$route.name !== 'Login'" >
      <v-img style="width: 200px;height: 50px; left: 25px; top: 8px;" src="./assets/logoweserve1.png"></v-img>

      <v-list  style="    top: 45px;">
        <v-list-item prepend-icon="mdi-home" title="Home" to="/home"></v-list-item>
        <v-list-item prepend-icon="mdi-account-arrow-right" title="การเข้างาน" to="/checkin"></v-list-item>
       
        <v-list-group value="ข้อมูลพนักงาน">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-folder-account" title="ฝ่ายบุคคล"></v-list-item>
          </template>
          <v-list-item v-bind="props" title="ข้อมูลพนักงาน" to="/employee"></v-list-item>
            <template v-slot:append>
              <v-badge color="error" content="6" inline></v-badge>
            </template>
           
        </v-list-group>

        <v-list-group value="การลางาน">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="การลางาน"></v-list-item>
          </template>
          <!-- <v-list-item v-bind="props" title="ยื่นลา" to="/Leave"></v-list-item> -->
          <v-list-item v-bind="props" title="ตารางการลา" to="/Dashboard">
            <template v-slot:append>
              <v-badge color="error" content="6" inline></v-badge>
            </template></v-list-item>

        </v-list-group>
      </v-list>






    </v-navigation-drawer>

    <v-app-bar style="background-color: #333333;position: fixed; top: 0;" v-if="$route.name !== 'Login'" >
      <v-app-bar-nav-icon style="color: white;" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="color: white;">HUMAN RESOUCES</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">

          <v-btn icon v-bind="props" style="right: 15px;" >
            <v-avatar>
              <v-img src="./assets/Profile.png" alt="John"></v-img>
            </v-avatar>
          </v-btn>

        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar>
                <v-img src="./assets/Profile.png" alt="John"></v-img>
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

      fullName: 'สุชาดา ศิริโกศล',
      email: 'Suchada.mook@weserve.co.th',
    },
    
    admins: [],
    

  }),
}
</script>
