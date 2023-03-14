<template>
    <div class="Leave">
        <h2 style="padding-left: 20px; padding-top: 20px;color: black;">การลางาน</h2>
    </div>
    <v-container>
        <v-row no-gutters>
            <v-col cols sm="12" md="6" style="padding: 10px;">

                <v-select label="ประเภทการลา" :items="['ลากิจ', 'ลาป่วย', 'ลาพักร้อน',]" variant="solo"></v-select>
                <v-text-field v-model="firstname" :rules="nameRules" label="เหตุผลเนื่องจาก(กรณีลากิจ)"
                    variant="solo"></v-text-field>
            </v-col>

            <v-col cols sm="12" md="6" style="padding: 10px;">

                <v-file-input label="Upload a file" :show-size="true" :small-chips="true"
                    :counter="1" accept=".jpg, .jpeg, .png, .pdf" @change="onFileSelected">
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
   
        <v-row no-gutters>
            <v-col cols sm="3" md="3">

                <v-btn color="success" class="mt-4" block @click="validate"
                    size="large" to="">
                    ดำเนินการต่อ
                </v-btn>
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
        methods: {
            onFileSelected(files) {
                console.log(files)
            }
        },
        rules: [
            value => {
                return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
            },
        ],
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