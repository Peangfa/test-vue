<template>
    <div class="Leave">
        <h2 style="margin-top: 30px;margin-left: 40px;color: black;">การลางาน</h2>
    </div>
    <v-container>
        <v-row no-gutters>
            <v-col cols sm="12" md="6" style="padding: 10px;">
                <v-select v-model="leave" label="ประเภทการลา" :items="['ลากิจ', 'ลาป่วย', 'ลาพักร้อน',]" variant="solo"
                    required>
                </v-select>

            </v-col>

            <v-col>
                <v-text-field v-model="reason" :rules="nameRules" label="เหตุผลเนื่องจาก(กรณีลากิจ)" variant="solo">
                </v-text-field>

            </v-col>

            <v-col cols sm="12" md="6" style="padding: 10px;">

                <div>
                    <v-file-input v-model="selectedFile" variant="solo" label="Choose a file"
                        @change="handleFileUpload"></v-file-input>
                </div>


            </v-col>
        </v-row>

        <v-row justify="space-around" no-gutters>


            <v-col sm="12" md="6" style="padding: 10px;">
                <v-col sm="12" md="6" class="d-flex justify-start">
                    Start date: {{ trip.start || 'Not set' }}
                </v-col>

                <v-text-field v-model="trip.start" label="Start date" type="date" variant="solo">
                </v-text-field>

            </v-col>


            <v-col sm="12" md="6" style="padding: 10px;">
                <v-col sm="12" md="6" class="d-flex justify-start">
                    End date: {{ trip.end || 'Not set' }}
                </v-col>

                <v-text-field v-model="trip.end" label="End date" type="date" variant="solo">
                </v-text-field>

            </v-col>


        </v-row>

        <v-row no-gutters style="display: flex; flex-direction: column;">
            <v-col cols sm="12" md="6" style="padding: 10px;">
                <v-select label="รวมระยะการลา" :items="['ครึ่งวัน', '1', '2', '3', '4']" variant="solo">
                </v-select>
            </v-col>

            <v-col cols sm="12" md="6" style="padding: 10px;">
                <form @submit.prevent="submit">
                    <v-text-field v-model="telphone" variant="solo" label="เบอร์โทรศัพท์ติดต่อฉุกเฉิน" :counter="10"
                        required></v-text-field>
                </form>
            </v-col>
        </v-row>


    </v-container>
    <v-row style="display: flex; justify-content: flex-end; ">
        <v-col md="3" style="position: relative;">

            <v-dialog v-model="dialog" persistent width="auto">

                <template v-slot:activator="{ props }">
                    <v-btn size="large" color="primary" v-bind="props" style="position: absolute;">
                        ดำเนินการต่อ
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title class="text-h5">
                        ต้องการบันทึกข้อมูลใช่หรือไม่?
                    </v-card-title>

                    <v-card-text style="color: red;">**โปรดเช็คข้อมูลให้ถูกต้องก่อนจะกดตกลง**</v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red-darken-4" variant="text" @click="dialog = false">
                            ยกเลิก
                        </v-btn>
                        <v-btn color="green-darken-1" variant="text" @click="dialog = false" to="/Dashboard">
                            ยืนยัน
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>
<style>
label {
    display: block;
    font: 1rem 'Fira Sans', sans-serif;
    border: 50px;
}

input,
label {
    margin: 0.4rem 0;
}
</style>


<script>



export default {
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