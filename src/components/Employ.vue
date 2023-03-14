<template>
  <h2 style="margin-top: 30px;margin-left: 40px;">ข้อมูลพนักงาน</h2>
  <v-container style="padding: 20px;">
    <v-card to="/Edit" style="background-color: #333333;">




      <!-- รูปภาพ -->
      <v-row no-gutters>
        <v-col cols md="5" sm="12" style="display: flex; justify-content: center; padding: 20px; ">
          <v-avatar size="200" rounded="0">
            <v-img aspect-ratio="1/1" cover src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
          </v-avatar>
        </v-col>

        <!-- ข้อมูลพนักงาน -->
        <v-col cols md="7" sm="12" style="  padding: 10px;   ">
          <p style="padding: 5px; color: white;"><v-icon>mdi-account</v-icon>
            สุชาดา ศิริโกศล
          </p>

          <p style="padding: 5px; color: white;">
            <v-icon>mdi-email</v-icon>
            Suchada.mook@weserve.co.th
          </p>

          <p style="padding: 5px; color: white;"><v-icon>mdi-briefcase</v-icon>
            Human Resouces
          </p>
 
          <v-col style="display: flex;">
            <v-card width="190" style="margin: 5px; ">
              <template v-slot:title>
                ลาป่วย
              </template>
              <v-card-text>
                This is content
              </v-card-text>
            </v-card>
            <v-card  width="190" style="margin: 5px;">
              <template v-slot:title>
                ลากิจ
              </template>
              <v-card-text>
                This is content
              </v-card-text>
            </v-card>
            <v-card  width="190" style="margin: 5px;">
              <template v-slot:title>
                ลาพักร้อน
              </template>
              <v-card-text>
                This is content
              </v-card-text>
            </v-card>

          </v-col>
        </v-col>

      </v-row>




    </v-card>
  </v-container>

</template>




<script>
export default {
  name: 'Employ',

  data: () => ({
      dialog: false,
    }),
  // data() {
  //   return {
  //     employeeData: [{
  //       name: "Mr.Toon Body",
  //       role: "HR",
  //       age: 36
  //     },{
  //       name: "Mr.Toon Body",
  //       role: "Developer",
  //       age: 36
  //     },{
  //       name: "Mr.Toon Body",
  //       role: "Marketing",
  //       age: 36
  //     },{
  //       name: "Mr.Toon Body",
  //       role: "HR",
  //       age: 36
  //     }],

  //   }
  // },
}
</script>
<style ></style>