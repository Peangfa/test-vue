<template>
    <div class="Login">
        <div style="background-color: #FDE10A; height: 100vh; display: flex; justify-content: center;align-items: center; overflow: hidden;">
            <div >

                <div class="imglogo" style="position: relative; right: 35px;">
                    <v-img src="../assets/logoweserve1.png" alt="logo"  :style="{width: xs || sm ? '300px' : '500px'}"></v-img>

                </div>
                <div class="box" style="text-align: center;">
                        <h3>HUMAN RESOUCES</h3>
                        
                    </div>


                <div style="  display: flex; justify-content: center">
                    
                        <v-btn to="/Home" variant="outlined" size="x-large" style="background-color: #EDEDED;top: 25px;">
                            <v-img src="../assets/google.png" width="30" height="30"></v-img>
                            <div>Login by google</div>

                        </v-btn>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { useDisplay } from 'vuetify'

  export default {
    setup () {
      // Destructure only the keys we want to use
      const { xs, mdAndUp, sm} = useDisplay()

      return { xs,sm, mdAndUp }
    }
  }
</script>



