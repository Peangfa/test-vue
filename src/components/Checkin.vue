<template >
  <h2 style="margin-top: 30px; margin-left: 40px">การเข้างาน</h2>
  <v-container>
    <v-row>
      <v-col sm="12" md="6" style="display: flex; justify-content: center">
        <div>
          <v-card
            height=" 450px "
            width=" 450px "
            elevation="5"
            style="margin-top: 100px; padding: 18px; border-radius: 16px"
          >
            <v-avatar
              size="260"
              style="margin-top: 25px; margin-left: 70px; margin-right: 70px"
            >
              <v-img
                aspect-ratio="1/1"
                cover
                src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
              ></v-img>
            </v-avatar>
            <p class="text-center text-h6 mb-1" style="padding-top: 50px">สุชาดา ศิริโกศล</p>
            <p class="text-center text-h6 mb-1" style="padding-top;: 5px">Human Resouces</p>
          </v-card>

          <v-row justify="center">
            <v-col cols="auto" style="display: flex; padding-top: 70px">
              <v-dialog activator="parent" width="auto">
                <template v-slot:activator="{ props }">
                  <v-btn color="success" size="x-large" v-bind="props"
                    >บันทึกเข้า</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="success" title="บันทึกการออกงาน">
                    </v-toolbar>
                    <v-card-text>
                      <div class="text-h5 pa-12">
                        บันทึกเวลาเข้างานของคุณเรียบร้อยแล้ว
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                      <v-btnd
                        rounded="pill"
                        variant="tonal"
                        size="x-large"
                        @click="isActive.value = false"
                        >ปิด</v-btnd
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>

              <v-dialog activator="parent" width="auto">
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="error"
                    size="x-large"
                    v-bind="props"
                    style="margin-left: 50px"
                    >บันทึกออก</v-btn
                  >
                </template>
                <template v-slot:default="{ isActive }">
                  <v-card>
                    <v-toolbar color="error" title="บันทึกการออกงาน">
                    </v-toolbar>
                    <v-card-text>
                      <div class="text-h5 pa-12">
                        บันทึกเวลาออกงานของคุณเรียบร้อยแล้ว
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                      <v-btnd
                        rounded="pill"
                        variant="tonal"
                        size="x-large"
                        @click="isActive.value = false"
                        >ปิด</v-btnd
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col sm="12" md="6">
        <div>
          <h3 style="margin-top: 30px; margin-left: 40px">ประวัติการเข้างาน</h3>
          <br />
          <v-card>
            <v-table>
              <thead style="background-color: #e0e0e0">
                <tr>
                  <th class="text-center">วันที่</th>
                  <th class="text-center">เวลา</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.date">
                  <td class="text-center">{{ item.date }}</td>
                  <td class="text-center">{{ item.time }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "checkin",
  data() {
    return {
      desserts: [
        {
          date: "22  มกราคม 2566",
          time: "08.55 น.",
        },
        {
          date: "23  มกราคม 2566",
          time: "08.49น.",
        },
        {
          date: "24  มกราคม 2566",
          time: "09.05 น.",
        },
        {
          date: "25  มกราคม 2566",
          time: "08.59 น.",
        },
        {
          date: "26  มกราคม 2566",
          time: "08.55 น.",
        },
        {
          date: "27  มกราคม 2566",
          time: "08.45 น.",
        },
        {
          date: "30  มกราคม 2566",
          time: "08.51 น.",
        },
        {
          date: "31  มกราคม 2566",
          time: "08.55 น.",
        },
        {
          date: "1 กุมภาพันธ์ 2566",
          time: "08.55 น.",
        },
        {
          date: "2 กุมภาพันธ์ 2566",
          time: "08.55 น.",
        },
      ],
    };
  },
};
</script>
<style>
</style>