<template>
  <h3 style="margin-top: 20px;margin-left: 20px;"> โปรไฟล์</h3>

  <v-container>
    <v-card style="background-color: #333333;">
      <v-row no-gutters>
        <v-col cols md="5" sm="12" style="display: flex; justify-content: center; padding: 20px; ">
          <v-avatar size="200" rounded="0">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
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
            <v-card width="190" style="margin: 5px;">
              <template v-slot:title>
                ลาป่วย
              </template>
              <v-card-text>
                This is content
              </v-card-text>
            </v-card>
            <v-card width="190" style="margin: 5px;">
              <template v-slot:title>
                ลากิจ
              </template>
              <v-card-text>
                This is content
              </v-card-text>
            </v-card>
            <v-card width="190" style="margin: 5px;">
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

  <v-expansion-panels style="padding: 80px; bottom: 84px; ">
  <v-expansion-panel cols="10" style="background-color: #FDE10A;">
    <v-expansion-panel-title v-slot="{ open }">
      <v-row no-gutters>
        <v-col cols="8" class="text--secondary">
          <v-fade-transition leave-absolute>
            <span v-if="open">When do you want to travel?</span>
            <v-row v-else no-gutters style="width: 100%">
              <v-col sm="12" md="10" class="d-flex justify-start">
                ประวัติส่วนตัว </v-col>
            </v-row>
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-card>
        <v-row v-for="item in empolyinformation" :key="item.name">
          <v-col md="12" style="display: flex;padding: 35px;">
            ชื่อ-นามสกุล :{{ item.name }}
          </v-col>
          <v-col md="12" style="padding: 35px;">
            ชื่อเล่น :{{ item.nickname }}
          </v-col>
          <v-col md="12" style="padding: 35px;">
            วันเดือนปีเกิด :{{ item.birthdate }}
          </v-col>
          <v-col md="12" style="padding: 35px;">
            เบอร์โทรศัพท์ :{{ item.phonenum }}
          </v-col>


        </v-row>
      </v-card>

    </v-expansion-panel-text>
  </v-expansion-panel>
</v-expansion-panels>
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    empolyinformation: [
            {
                name:  'สุชาดา ศิริโกศล',
                nickname: 'มุก',
                birthdate: '25 พฤษภาคม 2538',
                phonenum: '0897654321',
            }
        ],
  })
}
</script>