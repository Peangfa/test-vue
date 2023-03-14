<template>
    <div class="Login">
        <div style="background-color: #FDE10A; height: 100vh; display: flex; justify-content: center;align-items: center;">
            <div style="display: flex; flex-direction: column;">

                <div class="imglogo" style="position: relative;">
                    <v-img src="../assets/logoweserve1.png" alt="logo"></v-img>

                    <div class="box" style="position: absolute; left: 35%; top: 85%;">
                        <h3>HUMAN RESOUCES</h3>

                    </div>
                </div>


                <div style="margin-top: 30px; margin-left: 36px; padding: 80px; si">
                    <router-link to="/Home">
                        <v-btn variant="outlined" size="x-large" style="background-color: #EDEDED; ">
                            <v-img src="../assets/google.png" width="30" height="30"></v-img>
                            <div>Login by google</div>

                        </v-btn>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}

</script>

<style scoped></style>

