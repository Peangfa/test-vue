
<template>
    <v-row justify="center">
        <v-col>
            <v-card-title style="margin-top: 30px;margin-left: 40px; ">
                <span class="text-h5">เพิ่มข้อมูลพนักงาน</span>
            </v-card-title>
            <v-btn color="white" style="margin-top: 30px;margin-left: 40px;" to="/employee" @click="$emit('backstep')">
        <v-icon
          start
          icon="mdi-arrow-left"
        ></v-icon>
        Back
      </v-btn>
            <v-card-text style="padding: 30px;">
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="ชื่อ*" variant="solo" required></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="นามสกุล*" variant="solo" persistent-hint required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="ชื่อเล่น*" variant="solo" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="เบอร์โทรศัพท์*" variant="solo" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="อีเมล์*" variant="solo" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="รหัสผ่าน*" variant="solo" type="password" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="อายุ*" variant="solo" type="Age" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select :items="['HR', 'Web developer', 'Marketing',]" label="ตำแหน่ง*" variant="solo"
                                required></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" >
                            <v-col class="d-flex justify-start">
                               วันเกิด: {{ trip.start || 'Not set' }}
                            </v-col>
                            <v-text-field v-model="trip.start" label="วันเกิด" type="date" variant="solo"></v-text-field>
                        </v-col>


                    </v-row>
                </v-container>

            </v-card-text>


            <v-row justify="end" style="padding: 30px;">
                <v-dialog v-model="dialog" persistent width="auto">
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props">
                            ดำเนินการต่อ
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="text-h5">
                            คุณต้องการบันทึกข้อมูลใช่มั้ย
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green-darken-1" variant="text" @click="dialog = false">
                                ยกเลิก
                            </v-btn>
                            <v-btn color="green-darken-1" variant="text" @click="dialog = false">
                                บันทึก
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>


        </v-col>
    </v-row>
</template>




<script>



export default {
    name: 'Addemploy',
    data: () => ({

    

            dialog: false,
       
        methods: {
            onFileSelected(files) {
                console.log(files)
            }
        },

        files: [],
        date: null,
        trip: {
            name: '',
            location: null,
            start: null,
            end: null,
        },
    }),

}
</script>