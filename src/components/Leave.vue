<template>
    <div class="Leave">
        <h2 style="padding-left: 20px; padding-top: 20px;color: black;">การลางาน</h2>
    </div>
    <v-container>
        <v-row no-gutters>
            <v-col cols sm="12" md="6" style="padding: 10px;">

                <v-select label="ประเภทการลา" :items="['ลากิจ', 'ลาป่วย', 'ลาพักร้อน',]" variant="solo"></v-select>

            </v-col>
            <v-col>
                <v-text-field v-model="firstname" :rules="nameRules" label="เหตุผลเนื่องจาก(กรณีลากิจ)"
                    variant="solo"></v-text-field>

            </v-col>

            <v-col cols sm="12" md="6" style="padding: 10px;">

                <v-file-input label="Upload a file" :show-size="true" :small-chips="true" :counter="1"
                    accept=".jpg, .jpeg, .png, .pdf" @change="onFileSelected" variant="solo">
                    <!-- Override the default icon with the one you want to use -->
                    <template v-slot:selection="{ text }">
                        <v-chip small label color="primary">
                            <v-icon left>mdi-file</v-icon> <!-- Set the icon for the selected file -->
                            {{ text }}
                        </v-chip>
                    </template>
                </v-file-input>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col sm="12" md="12" class="text--secondary">
                <v-fade-transition leave-absolute>
                    <span v-if="open">When do you want to travel?</span>
                    <v-row v-else no-gutters style="width: 100%">
                        <!-- <v-col sm="12" md="6" class="d-flex justify-start">
                            Start date: {{ trip.start || 'Not set' }}
                        </v-col>
                        <v-col sm="12" md="6" class="d-flex justify-start">
                            End date: {{ trip.end || 'Not set' }}
                        </v-col> -->
                    </v-row>
                </v-fade-transition>
            </v-col>
        </v-row>

        <v-row justify="space-around" no-gutters>


            <v-col sm="12" md="6" style="padding: 10px;">
                <v-col sm="12" md="6" class="d-flex justify-start">
                    Start date: {{ trip.start || 'Not set' }}
                </v-col>
                <v-text-field v-model="trip.start" label="Start date" type="date" variant="solo"></v-text-field>
            </v-col>


            <v-col sm="12" md="6" style="padding: 10px;">
                <v-col sm="12" md="6" class="d-flex justify-start">
                    End date: {{ trip.end || 'Not set' }}
                </v-col>
                <v-text-field v-model="trip.end" label="End date" type="date" variant="solo"></v-text-field>
            </v-col>


        </v-row>

        <v-row no-gutters style="display: flex; flex-direction: column;">
            <v-col cols sm="12" md="6" style="padding: 10px;">
                <v-select label="รวมระยะการลา" :items="['ครึ่งวัน', '1', '2', '3', '4']" variant="solo"></v-select>
            </v-col>
            <v-col cols sm="12" md="6" style="padding: 10px;">
                <form @submit.prevent="submit">
                    <v-text-field variant="solo" label="เบอร์โทรศัพท์ติดต่อฉุกเฉิน" :counter="10"></v-text-field>
                </form>
            </v-col>
        </v-row>


    </v-container>
    <v-row style="display: flex; justify-content: flex-end; ">
        <v-col md="3" style="position: relative;">
            <v-dialog v-model="dialog" persistent width="auto">
                <template v-slot:activator="{ props }">
                    <v-btn color="primary" v-bind="props"  style="position: absolute;">
                        ดำเนินการต่อ
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="text-h5">
                        Use Google's location service?
                    </v-card-title>
                    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red-darken-4" variant="text" @click="dialog = false">
                            ยกเลิก
                        </v-btn>
                        <v-btn color="green-darken-1" variant="text" @click="dialog = false"  to="/history">
                            ยืนยัน
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>

    <!-- <v-row no-gutters style="display: flex; justify-content: flex-end; ">
        <v-col md="3" style="position: relative;" >

            <v-btn color="success" class="mt-4" block @click="validate" size="large" to="" style="position: absolute; ">
                ดำเนินการต่อ
            </v-btn>
        </v-col>
    </v-row> -->
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
        locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'],
        
    




    }),

}
</script>