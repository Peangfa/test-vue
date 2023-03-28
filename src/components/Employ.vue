<template>
  <h2 style="margin-top: 30px;margin-left: 40px; padding: 20px;" to="/Employee">ข้อมูลพนักงาน</h2>

  <v-row>
    <v-col md="12" sm="12" style="display: flex;">
      <v-card class="mx-auto" style="background-color: #333333; padding: 20px;" 
        to="/Edit" >
        <v-img src="../assets/Korean.jpg" height="300px"></v-img>
        <v-card-title style="color: aliceblue; text-align: center;"> สุชาดา ศิริโกศล </v-card-title>
        <v-card-title style="color: aliceblue; text-align: center;"> Human Resouces </v-card-title>

      </v-card>
      
     
      <v-card class="mx-auto" max-width="344" style="background-color: #333333; padding: 20px;" 
        to="/Edit" >
        <v-img src="../assets/Korean.jpg" height="300px"></v-img>
        <v-card-title style="color: aliceblue; text-align: center;"> สุชาดา ศิริโกศล </v-card-title>
        <v-card-title style="color: aliceblue; text-align: center;"> Human Resouces </v-card-title>

      </v-card>

      <v-card class="mx-auto" max-width="344" style="background-color: #333333; padding: 20px;" 
        to="/Edit" >
        <v-img src="../assets/Korean.jpg" height="300px"></v-img>
        <v-card-title style="color: aliceblue; text-align: center;"> สุชาดา ศิริโกศล </v-card-title>
        <v-card-title style="color: aliceblue; text-align: center;"> Human Resouces </v-card-title>

      </v-card>
      
    </v-col>

    <v-col md="12" sm="12" style="display: flex;">
      <v-card class="mx-auto" max-width="344" style="background-color: #333333; padding: 20px;" 
        to="/Edit" >
        <v-img src="../assets/Korean.jpg" height="300px"></v-img>
        <v-card-title style="color: aliceblue; text-align: center;"> สุชาดา ศิริโกศล </v-card-title>
        <v-card-title style="color: aliceblue; text-align: center;"> Human Resouces </v-card-title>

      </v-card>
      <v-card class="mx-auto" max-width="344" style="background-color: #333333; padding: 20px;" 
        to="/Edit" >
        <v-img src="../assets/Korean.jpg" height="300px"></v-img>
        <v-card-title style="color: aliceblue; text-align: center;"> สุชาดา ศิริโกศล </v-card-title>
        <v-card-title style="color: aliceblue; text-align: center;"> Human Resouces </v-card-title>

      </v-card>
      <v-card class="mx-auto" max-width="344" style="background-color: #333333; padding: 20px;" 
        to="/Edit" >
        <v-img src="../assets/Korean.jpg" height="300px"></v-img>
        <v-card-title style="color: aliceblue; text-align: center;"> สุชาดา ศิริโกศล </v-card-title>
        <v-card-title style="color: aliceblue; text-align: center;"> Human Resouces </v-card-title>

      </v-card>
    </v-col>
  </v-row>
</template>






    <!-- <v-container style="padding: 20px; display: flex; flex-direction: row;">

        <v-card class="mx-auto" max-width="344" style="background-color: #333333;padding: 12px;"  to="/Edit">
          <v-img src="../assets/Korean.jpg" height="300px" ></v-img>

          <v-card-title style="color: aliceblue;">
            สุชาดา ศิริโกศล
          </v-card-title>

          <v-card-subtitle style="color: aliceblue;">
            Suchada.mook@weserve.co.th
          </v-card-subtitle>
        </v-card> -->

    <!-- <v-card to="/Edit" style="background-color: #333333;">




 
      <v-row no-gutters>
        <v-col cols md="5" sm="12" style="display: flex; justify-content: center; padding: 20px; ">
          <v-avatar size="200" rounded="0">
            <v-img aspect-ratio="1/1" cover src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
          </v-avatar>
        </v-col>

       
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
                จำนวนวันลาที่เหลือ :
              </v-card-text>
              <v-card-text>
                ใช้ไปแล้ว :
              </v-card-text>
            </v-card>
            <v-card width="190" style="margin: 5px;">
              <template v-slot:title>
                ลากิจ
              </template>
              <v-card-text>
                จำนวนวันลาที่เหลือ :
              </v-card-text>
              <v-card-text>
                ใช้ไปแล้ว :
              </v-card-text>
            </v-card>
            <v-card width="190" style="margin: 5px;">
              <template v-slot:title>
                ลาพักร้อน
              </template>
              <v-card-text>
                จำนวนวันลาที่เหลือ :
              </v-card-text>
              <v-card-text>
                ใช้ไปแล้ว :
              </v-card-text>
            </v-card>

          </v-col>
        </v-col>

      </v-row>




    </v-card> -->
    <!-- </v-container> -->

 




<script>
export default {
  name: 'Employ',

  data: () => ({
    dialog: false,
    show: false,


  }),


}
</script>
<style ></style>