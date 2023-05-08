<template >
  <h2 style="margin-top: 30px;margin-left: 40px;">การบันทึกเข้า-ออกงาน</h2>

  <v-container>
    <v-row>
      <v-col sm="12" md="4"> 
        <v-card style="margin-top: 100px;padding: 18px; border-radius: 16px;" elevation="3">
          
          <div v-for="item in empolyinformation" :key="item.name">
            <h3 style="padding: 10px;font-weight: bold;">
              <v-icon  size="large">mdi-account-circle-outline</v-icon>{{item.name}}</h3>
            
            <h3 style="padding:10px;font-weight:bold;">
              <v-icon  size="large">mdi-account</v-icon>{{ item.position }}</h3>
            
            <h3 style="padding:10px;">
              <v-icon  size="large">mdi-calendar</v-icon>{{ formattedDate }}</h3>
          </div>
           
          <div> 
            <v-row justify="center">
              <v-col cols="auto" style="display: flex; padding-top:70px">
                  <v-dialog activator="parent" width="auto">
                      <template v-slot:activator="{ props }">
                        <v-btn  color="success" size="x-large" v-bind="props">บันทึกเข้า</v-btn>
                      </template>

                      <template v-slot:default="{ isActive }">
                        <v-card>
                          <v-toolbar color="success" title="บันทึกการออกงาน"></v-toolbar>
                            <v-card-text>
                              <div class="text-h5 pa-12">
                                ต้องการบันทึกเวลาเข้างานของคุณใช่หรือไม่ ?
                              </div>
                           </v-card-text>
                            <v-card-actions class="justify-end">
                              <v-btn style="font-size:large;font-weight: bold;" color="success" variant="text" @click="isActive.value = false" >
                                ตกลง
                              </v-btn>
                              <v-btn style="font-size: large;font-weight: bold;" color="error" variant="text" @click="isActive.value = false"  >
                                ยกเลิก
                              </v-btn>
                            </v-card-actions>
                        </v-card>
                     </template>
                  </v-dialog>

                  <v-dialog activator="parent" width="auto">
                    <template v-slot:activator="{ props }">
                       <v-btn  color="error" size="x-large" v-bind="props" style="margin-left: 50px">บันทึกออก</v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-card>
                        <v-toolbar color="error" title="บันทึกการออกงาน"></v-toolbar>
                          <v-card-text>
                            <div class="text-h5 pa-12">
                              ต้องการบันทึกเวลาออกงานของคุณใช่หรือไม่ ?
                            </div>
                          </v-card-text>
                          <v-card-actions class="justify-end">
                            <v-btn style="font-size:large;font-weight: bold;" color="success" variant="text" @click="isActive.value = false"  >
                              ตกลง
                            </v-btn>
                            <v-btn style="font-size: large;font-weight: bold;" color="error" variant="text" @click="isActive.value = false"  >
                              ยกเลิก
                            </v-btn>
                          </v-card-actions>
                      </v-card>
                  </template>
                </v-dialog>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>

      <v-col sm="12" md="8">     
        <div >
          <h3 class="text-high-emphasis font-weight-medium">ประวัติการเข้า-ออกงาน</h3>
          <br/>
          <v-card elevation="3">
            <v-table>
              <thead style="background-color: #e0e0e0">
                <tr>
                  <th class="text-center ">วันที่</th>
                  <th class="text-center">เวลาเข้า</th>
                  <th class="text-center">เวลาออก</th>
                </tr>
              </thead>
              <tbody >
                <tr v-for="item in historys" :key="item.date">
                  <td class="text-center">{{ item.date }}</td>
                  <td class="text-center">{{ item.timein }}</td>
                  <td class="text-center">{{ item.timeout }}</td>
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
import moment from 'moment';
export default {
  name: "checkin",
    data() {
    return {
      date: new Date(),
      historys: [
        {
          date: "22  มกราคม 2566",
          timein: "08.55 น.",
          timeout:"18.00 น."
        },
        {
          date: "23  มกราคม 2566",
          timein: "08.55 น.",
          timeout:"18.00 น."
        },
        {
          date: "24  มกราคม 2566",
          timein: "08.55 น.",
          timeout:"18.00 น."
        },
        {
          date: "25  มกราคม 2566",
          timein: "08.55 น.",
          timeout:"18.00 น."
        },
        {
          date: "26  มกราคม 2566",
          timein: "08.55 น.",
          timeout:"18.00 น."
        },
        {
          date: "27  มกราคม 2566",
          timein: "08.55 น.",
          timeout:"18.00 น."
        },
        { 
          date: "25  มกราคม 2566",
          timein: "08.55 น.",
          timeout:"18.00 น."
        },
        {
          date: "26  มกราคม 2566",
          timein: "08.55 น.",
          timeout:"18.00 น."
        },
        {
          date: "27  มกราคม 2566",
          timein: "08.55 น.",
          timeout:"18.00 น."
        },
        
      ],
      empolyinformation: [
            {
              name: 'สุชาดา ศิริโกศล',
              position: 'Humance Resource',
            }
        ],
      
    }; 
  },
  
  computed: {
    formattedDate() {
      return moment(this.date).format('dddd D MMMM YYYY, h:mm a'); 
    },
  },


};
</script>

