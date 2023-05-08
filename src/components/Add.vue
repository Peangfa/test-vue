<template>
  <h2 style="margin-top: 30px;margin-left: 40px;">ข่าวสารและอีเวนต์ต่างๆ</h2>

    <v-btn color="#e0e0e0" style="margin-top: 30px;margin-left: 40px;" to="/Home" @click="$emit('back')">
        <v-icon start icon="mdi-arrow-left"></v-icon>
         BACK
    </v-btn>

    <v-spacer></v-spacer>
    <br/>

    <v-col sm="12">
      <v-card>
          <v-toolbar flat>
            <v-toolbar-title>ข่าวสารและอีเวนต์ต่างๆ</v-toolbar-title>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ props }">
                  <v-btn  class="mb-1" v-bind="props" style="font-size: medium; font-weight: bold;margin-right:15px;">
                    <v-icon>mdi-plus</v-icon>
                      เพิ่มข้อมูล
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
                          <v-text-field v-model="editItem.date" label="วันที่"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field v-model="editedItem.news" label="รายละเอียดข่าวสารหรืออีเวนต์"></v-text-field>
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
          </v-toolbar>

          <v-table>
            <thead>
              <tr>
                <th class="text-left">วันที่</th>
                <th class="text-left">รายละเอียดข่าวสารหรืออีเวนต์</th>
                <th class="text-left">แก้ไข</th>
              </tr>
            </thead>
            <tbody style="font-size: 16px;">
              <tr v-for="item in desserts" :key="item.date">
                <td class="text-left">{{ item.date }}</td>
                <td class="text-left text-justfy">{{ item.news }}</td>
                <td class="text-center"><v-icon size="small" class="me-2" @click="editItem(item.raw)">mdi-pencil</v-icon></td>
              </tr>
            </tbody>
          </v-table>
      </v-card>
    </v-col>
</template>

<script>
  export default {
    name:"Add",
    data: () => ({
      dialog: false,
      desserts: [],
      editedIndex: -1,
      editedItem: {
        date: '',
        news: '',
      },
      defaultItem: {
        date: '',
        news: '',
      },   
    }),
    
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'เพิ่มข้อมูล':'แก้ไขข้อมูล'
      },
    }, 
    
    created () {
      this.initialize()
    },
    
    methods: {
      initialize () {
        this.desserts = [
        {
          date: '5 มกราคม 2566',
          news: 'ซินเจียยู่อี่ ซินนี้ฮวดไช้ ตรุษจีนปีนี้ อิ่มปังรับอั่งเปาเพียงเปิดแอป WESERVE เมื่อสั่งอาหารทุก ฿500 ขึ้นไปรับอั่งเปากินฟรี! ฿880 อยากเฮง ลุ้นกินฟรีแบบนี้ ไม่ควรพลาด',
        },
        {
          date: '14 กุมภาพันธ์ 2566',
          news: 'ขอเชิญทุกคนมาร่วมฉลองความรักอันไร้ขอบเขตในเดือนแห่งความรักนี้กับงาน ‘Love is Love : Love has no boundaries’ที่มาพร้อมกับหลากหลายกิจกรรมส่งต่อความรักในทุกรูปแบบ',
        },
        {
          date: '5 มีนาคม 2566',
          news: 'ขอเชิญเข้าร่วมทำบุญทอดกฐิน ณ วัดฉลอง',
        },
        {
          date: '14 มีนาคม 2566',
          news: 'OPEN HOUSE ขอเชิญทุกคนมาร่วมฉลองความรักอันไร้ขอบเขตในเดือนแห่งความรักนี้กับงาน‘Love is Love : Love has no boundaries’ที่มาพร้อมกับหลากหลายกิจกรรมส่งต่อความรักในทุกรูปแบบ',
        },
        ]
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
     
      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    }

  };
</script>