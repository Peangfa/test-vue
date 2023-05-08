<template>
  <h2 style="margin-top: 30px; margin-left: 40px; font-weight: bold">หน้าหลัก</h2>

  <v-container>
    <v-card style="padding-left: 15px; margin-top: 40px; border-radius: 16px" elevation="2" rounded="16" class="pa-4 mx-auto">
      <v-row class="justify-center">
        <v-col cols md="6" sm="12">
            <div v-for="item in empolyinformation" :key="item.name">
                <p class="text-left text-h3 mb-1" style="margin-top: 50px;font-weight: bold;"> ยินดีต้อนรับ {{ item.name }}</p>
            </div>
              <v-spacer></v-spacer>
              <p class="text-left text-h5 mb-1">
                ขอให้มีความสุขกับการทำงานในวันนี้ !
              </p>
              <p class="text-left text-h8 mb-1 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
          </v-col>
          <v-col md="4" sm="12">
            <v-img src="../assets/Working.png" alt="Working"></v-img>
          </v-col>
      </v-row>
    </v-card>

    <v-row>
      <v-col cols md="6" sm="12">
        <v-card style="padding-left: 15px; margin-top: 40px; border-radius: 16px" elevation="3" class="pa-4 mx-auto"> 
            <v-col cols="12" sm="8">
              <h2>ข่าวสารและอีเวนต์ต่างๆ</h2>
            </v-col>
          
          <v-card-text>
            <div class="text-h6 font-weight-bold">
              <v-icon>mdi-calendar-month</v-icon>วันที่ 5 มกราคม 2566
            </div>
            <p class="text-body-1 text-justify">
              ซินเจียยู่อี่ ซินนี้ฮวดไช้ ตรุษจีนปีนี้
              อิ่มปังรับอั่งเปาเพียงเปิดแอป WESERVE เมื่อสั่งอาหารทุก ฿500
              ขึ้นไปรับอั่งเปากินฟรี! ฿880 อยากเฮง ลุ้นกินฟรีแบบนี้ ไม่ควรพลาด!
            </p>
          </v-card-text>

          <v-card-text>
            <div class="text-h6 font-weight-bold">
              <v-icon>mdi-calendar-month</v-icon>วันที่ 14 กุมภาพันธ์ 2566
            </div>
            <p class="text-body-1 text-justify">
              ขอเชิญทุกคนมาร่วมฉลองความรักอันไร้ขอบเขตในเดือนแห่งความรักนี้กับงาน
              ‘Love is Love : Love has no
              boundaries’ที่มาพร้อมกับหลากหลายกิจกรรมส่งต่อความรักในทุกรูปแบบ
            </p>
          </v-card-text>

          <v-card-text>
            <div class="text-h6 font-weight-bold">
              <v-icon>mdi-calendar-month</v-icon>วันที่ 5 มีนาคม 2566
            </div>
            <div class="text-body-1 text-justify">
              ขอเชิญเข้าร่วมทำบุญทอดกฐิน ณ วัดฉลอง
            </div>
          </v-card-text>

          <v-card-text>
            <div class="text-h6 font-weight-bold">
              <v-icon>mdi-calendar-month</v-icon>วันที่ 14 มีนาคม 2566
            </div>
            <p class="text-body-1 text-justify">
              OPEN HOUSE
              ขอเชิญทุกคนมาร่วมฉลองความรักอันไร้ขอบเขตในเดือนแห่งความรักนี้กับงาน‘Love
              is Love : Love has no
              boundaries’ที่มาพร้อมกับหลากหลายกิจกรรมส่งต่อความรักในทุกรูปแบบ
            </p>
          </v-card-text>

          <v-row class="justify-end">
            <v-col cols="12" sm="2">
              <v-btn to="/Add" rounded="xl" size="large" style="background-color: #e0e0e0;font-size: medium;font-weight: bold;">ดูทั้งหมด</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col sm="12" md="6">
        <v-card style=" margin-top: 40px; border-radius: 16px" elevation="3">
          <v-toolbar flat>
            <v-toolbar-title>วันหยุดประจำปี</v-toolbar-title>
            <div>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ props }">
                  <v-btn  class="mb-1" v-bind="props" style="font-size: medium;font-weight: bold;margin-right: 15px;">
                    <v-icon>mdi-plus</v-icon>
                      เพิ่ม
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field v-model="editItem.date" label="เดือน"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field v-model="editedItem.news" label="วันหยุด"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn style="font-size: medium; font-weight: bold" color="success" variant="text" @click="save">
                      ตกลง
                    </v-btn>

                    <v-btn style="font-size: medium; font-weight: bold" color="error" variant="text" @click="close">
                      ยกเลิก
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-toolbar>
          
          <v-table>
            <thead>
              <tr>
                <th class="text-center">เดือน</th>
                <th class="text-center">วันหยุด</th>
                <th class="text-center">แก้ไข</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.month">
                <td class="text-center">{{ item.month }}</td>
                <td class="text-left text-justfy">{{ item.holidays }}</td>
                <td class="text-center"><v-icon size="small" class="me-2" @click="editItem(item.raw)">mdi-pencil</v-icon>{{ item.edit }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Add from "../components/Add.vue";
export default {
  name: "Home",
  components: {
    Add,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    empolyinformation: [
      {
        name: "สุชาดา ศิริโกศล",
      },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      month: '',
      holidays: '',
    },
    defaultItem: {
      month: '',
      holidays: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล";
    },
  },
  
  watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

  methods: {
    initialize () {
      this.desserts = [
      {
        month: " มกราคม ",
        holidays:
          "วันที่ 1 : วันขึ้นปีใหม่    วันที่ 2 : วันหยุดชดเชยปีใหม่",
      },
      {
        month: " มีนาคม",
        holidays: "วันที่ 6 มีนาคม: วันมาฆบูชา",
      },
      {
        month: " เมษายน ",
        holidays:
          "วันที่ 6 เมษายน: วันจักรี   วันที่ 13 เมษายน: วันสงกรานต์    วันที่ 14 เมษายน: วันสงกรานต์  วันที่ 15 เมษายน: วันสงกรานต์ ",
      },
      {
        month: " พฤษภาคม",
        holidays:
          "วันที่ 1 พฤษภาคม: วันแรงงาน   วันพุธที่ 17 พฤษภาคม: วันพืชมงคล",
      },
      {
        month: " มิถุนายน",
        holidays:
          "วันที่ 3 มิถุนายน: วันวิสาขบูชา, วันเฉลิมพระชนมพรรษา สมเด็จพระบรมราชินี   วันที่ 5 มิถุนายน: วันหยุดชดเชย",
      },
      {
        month: " กรกฎาคม",
        holidays: "วันที่ 28 กรกฎาคม: วันเฉลิมพระชนมพรรษา รัชกาลที่ 10 ",
      },
      {
        month: " สิงหาคม ",
        holidays:
          "วันที่ 1 : วันอาสาฬหบูชา  วันที่ 2 : วันเข้าพรรษา  วันที่ 12 สิงหาคม: วันแม่แห่งชาติ วันที่ 14 สิงหาคม: วันหยุดชดเชยวันแม่ ",
      },
      {
        month: " ตุลาคม",
        holidays:
          "วันที่ 13 ตุลาคม: วันคล้ายวันสวรรคต รัชกาลที่ 9  วันที่ 23 ตุลาคม: วันปิยมหาราช ",
      },
      {
        month: " ธันวาคม",
        holidays:
          "วันที่ 5 ธันวาคม: วันพ่อแห่งชาติ   วันที่ 10 ธันวาคม: วันรัฐธรรมนูญ  วันที่ 11 ธันวาคม: วันหยุดชดเชยวันรัฐธรรมนูญ  วันที่ 31 ธันวาคม: วันสิ้นปี ",
      },
      ]
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

