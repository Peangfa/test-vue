<template>
    <h2 style="margin-top: 30px;margin-left: 40px;" to="/Employee">แก้ไข ข้อมูลพนักงาน</h2>
    
    
    <v-container style="padding: 20px;">
        <v-card style="background-color: #333333;">
            <!-- ไอคอนแก้ไข -->
            <v-col cols md="12" sm="12" style="display: flex; justify-content: flex-end; position: absolute;">
                <v-dialog v-model="dialog" persistent width="1024">
                    <template v-slot:activator="{ props }">
                        <v-icon icon="mdi-pencil" v-bind="props" style="color: white;"></v-icon>
                    </template>

                    <v-card>
                        <v-card-title>
                            <span class="text-h5">แก้ไขข้อมูลพนักงาน</span>
                        </v-card-title>
                        <v-card-text>

                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="ชื่อ*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="นามสกุล"
                                        hint="example of helper text only on focus"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="ชื่อเล่น*" persistent-hint
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="วันเกิด*" hint="01/01/2566" persistent-hint
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="อีเมล์*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="รหัสผ่าน*" type="password" required></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="อายุ*" required></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="เบอร์โทรศัพท์*" required></v-text-field>
                                </v-col>
                            </v-row>

                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="red-darken-4" variant="text" @click="dialog = false">
                               ปิด
                            </v-btn>
                            <v-btn color="green-darken-1" variant="text" @click="dialog = false">
                                บันทึก
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>




            <!-- รูปภาพ -->
            <v-row no-gutters>
                <v-col cols md="5" sm="12" style="display: flex; justify-content: center; padding: 20px; ">
                    <v-avatar size="200" rounded="0">
                        <v-img aspect-ratio="1/1" cover src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                    </v-avatar>
                </v-col>

                <!-- ข้อมูลพนักงาน -->
                <v-col cols md="7" sm="12" style="  padding: 10px;   ">
                    <p style="padding: 5px;  color: white;"><v-icon>mdi-account</v-icon>
                        สุชาดา ศิริโกศล
                    </p>

                    <p style="padding: 5px; color: white;"  >
                        <v-icon>mdi-email</v-icon>
                        Suchada.mook@weserve.co.th
                    </p>

                    <p style="padding: 5px; color: white;" ><v-icon>mdi-briefcase</v-icon>
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

        </v-card>
    </v-container>
    <!-- Drop ประวัติการลาของแก้ไขข้อมูลพนักงาน -->
    <v-expansion-panels style="padding: 80px; bottom: 84px; ">
        <v-expansion-panel cols="10" style="background-color: #FDE10A;">
            <v-expansion-panel-title v-slot="{ open }">
                <v-row no-gutters>
                    <v-col cols="8" class="text--secondary">
                        <v-fade-transition leave-absolute>
                            <span v-if="open">When do you want to travel?</span>
                            <v-row v-else no-gutters style="width: 100%">
                                <v-col sm="12" md="10" class="d-flex justify-start">
                                    ประวัติการลางาน
                                </v-col>
                            </v-row>
                        </v-fade-transition>
                    </v-col>
                </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-row justify="space-around" no-gutters>
                    <v-col sm="6" md="10">
                        <v-card>
                            <v-table fixed-header height="250px">
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            ชื่อ
                                        </th>
                                        <th class="text-left">
                                            ประเภทการลา
                                        </th>
                                        <th class="text-left">
                                            วันที่
                                        </th>
                                        <th class="text-left">
                                            สังกัดที่บริษัท
                                        </th>
                                        <th class="text-left">
                                            ใบรับรองแพทย์
                                        </th>
                                        <th class="text-center">
                                            สถานะ
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in desserts" :key="item.name">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.typeLeave }}</td>
                                        <td>{{ item.date }}</td>
                                        <td>{{ item.group }}</td>
                                        <td>{{ item.certificat }}</td>
                                        <td>

                                            <div style="display: flex; flex-direction: column;">

                                                <v-btn variant="tonal" color="secondary">
                                                    อนุมัติ
                                                </v-btn>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card>
                    </v-col>


                </v-row>
            </v-expansion-panel-text>
        </v-expansion-panel>
           <!-- Drop ของการแก้ไขข้อมูลพนักงงาน -->
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
    name: 'Edit',
    data: () => ({

        dialog: false,
        date: null,
        trip: {
            name: '',
            location: null,
            start: null,
            end: null,
        },
        locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],

        empolyinformation: [
            {
                name: 'สุชาดา ศิริโกศล',
                nickname: 'มุก',
                birthdate:'25 พฤษภาคม 2538',
                phonenum:'0897654321',
            }
        ],


        desserts: [
            {
                name: 'Frozen Yogurt',
                typeLeave: 'ลาป่วย',
                date: '22 ก.ค 2566',
                group: 'The Century King',
                certificat: 'รูปภาพ',
                staytus: 'appove',
            },
            {
                name: 'Ice cream sandwich',
                typeLeave: 'ลากิจ',
                date: '3 ก.ค 2566',
                group: 'The Century King',
                certificat: 'รูปภาพ',
                staytus: 'appove',
            },
            {
                name: 'Eclair',
                typeLeave: 'ลาพักร้อน',
                date: '30 ก.ค 2566',
                group: 'The Century King',
                certificat: 'รูปภาพ',
                staytus: 'appove',
            },


        ],
      
  
      


    })
}
</script>