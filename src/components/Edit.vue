<template>
    <!-- <h2 style="margin-top: 30px;margin-left: 40px;" >แก้ไขข้อมูลพนักงาน</h2> -->

    <v-btn color="white" style="margin-top: 30px;margin-left: 40px;" to="/employee" @click="$emit('back')">
        <v-icon start icon="mdi-arrow-left"></v-icon>
        Back
    </v-btn>

    <v-container style="padding: 20px;">
        <v-card style="background-color: #333333;">
            <!-- ไอคอนแก้ไข -->
            <v-col cols md="12" sm="12" style="display: flex; justify-content: flex-end; position: absolute;">
                <!-- แก้ไขข้อมูลพนักงาน -->
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
                                    <v-text-field v-model="editedItem.fname" label="ชื่อ*" required
                                        variant="solo"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.lname" label="นามสกุล" variant="solo"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="nickname" label="ชื่อเล่น*" persistent-hint required
                                        variant="solo"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="birthdate" label="วันเกิด*" hint="01/01/2566" persistent-hint
                                        variant="solo" required></v-text-field>
                                </v-col>
                                <v-col cols="12">

                                    <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
                                        label="E-mail"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="password" label="รหัสผ่าน*" type="password" required
                                        variant="solo"></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="อายุ*" required
                                        variant="solo"></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field v-model="Pnumber" label="เบอร์โทรศัพท์*" required
                                        variant="solo"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="red-darken-4" variant="text" @click="close">
                                ปิด
                            </v-btn>
                            <v-btn color="green-darken-1" variant="text" @click="save">
                                บันทึก
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <template v-slot:item.actions="{ item }">
                    <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                        mdi-pencil
                    </v-icon>
                </template>
            </v-col>




            <!-- รูปภาพ -->
            <v-row no-gutters>
                <v-col cols md="5" sm="12" style="display: flex; justify-content: center; padding: 50px; ">

                    <!-- <v-img aspect-ratio="1/1" cover src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img> -->
                    <img :src="user.img" alt="photo" :width="227" aspect-ratio="1/1" cover>

                </v-col>

                <!-- ข้อมูลพนักงาน -->
                <v-col cols md="7" sm="12" style="  padding: 10px;   ">
                    <p style="padding: 5px;  color: white;"><v-icon>mdi-account</v-icon>
                        {{ user.name }}
                    </p>

                    <p style="padding: 5px; color: white;">
                        <v-icon>mdi-email</v-icon>
                        {{ user.mail }}
                    </p>

                    <p style="padding: 5px; color: white;"><v-icon>mdi-briefcase</v-icon>
                        {{ user.position }}
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
                    <v-col sm="8" md="10">
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
                                    <!-- <tr v-for="item in desserts" :key="item.name"> -->
                                    <tr>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.typeLeave }}</td>
                                        <td>{{ user.date }}</td>
                                        <td>{{ user.group }}</td>
                                        <td>{{ user.certificat }}</td>
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
                    <v-col cols="10" class="text--secondary">
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
                    <!-- <v-row v-for="item in  desserts" :key="item.name"> -->
                    <v-row>
                        <v-col md="12" style="display: flex;padding: 35px;">
                            ชื่อ-นามสกุล :{{ user.name }}
                        </v-col>
                        <v-col md="12" style="padding: 35px;">
                            ชื่อเล่น :{{ user.nickname }}
                        </v-col>
                        <v-col md="12" style="padding: 35px;">
                            วันเดือนปีเกิด :{{ user.birthdate }}
                        </v-col>
                        <v-col md="12" style="padding: 35px;">
                            เบอร์โทรศัพท์ :{{ user.phonenum }}
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
    props: ["user", 'image'],
    data: () => ({



        dialog: false,
        date: null,
        trip: {
            name: '',
            location: null,
            start: null,
            end: null,
        },

        desserts: [],
        editedIndex: -1,
        editedItem: {
            fname: '',
            lname: '',
            nickname: '',
            birthdate: '',
            email: '',
            password: '',
            age: '',
            Pnumber: '',
        },
        defaultItem: {
            fname: '',
            lname: '',
            nickname: '',
            birthdate: '',
            email: '',
            password: '',
            age: '',
            Pnumber: '',
        },

    }),


    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },


        watch: {
            dialog(val) {
                val || this.close()
            },
            dialogDelete(val) {
                val || this.closeDelete()
            },
        },

        created() {
            this.initialize()
        },
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    id: 1,
                    name: "สุชาดา ศิริโกศล",
                    nickname: 'มุก',
                    position: "Human Resouces",
                    mail: "Suchada.mook@weserve.co.th",
                    birthdate: '25 พฤษภาคม 2538',
                    phonenum: '0897654321',
                    typeLeave: 'ลาป่วย',

                },
                {
                    id: 2,
                    name: "สุรเกียรติ ศิริโกศล",
                    nickname: 'บอย',
                    position: "Web Developer",
                    mail: "Surakain.boy@weserve.co.th",
                    birthdate: '2 เมษายน 2538',
                    phonenum: '0897621451',
                },
                {
                    id: 3,
                    name: "นิชาภา กองแก้ว",
                    nickname: 'นิว',
                    position: "Marketing",
                    mail: "Nichapha.new@weserve.co.th",
                    birthdate: '15 กันยายน 2538',
                    phonenum: '0812365487',
                },
                {
                    name: 'Eclair',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },

            ]
        },
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },


}
</script>