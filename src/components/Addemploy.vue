
<template>
    <v-btn color="white" style="margin-top: 30px;margin-left: 40px;" to="/employee" @click="$emit('back')">
        <v-icon start icon="mdi-arrow-left"></v-icon>
        Back
    </v-btn>
    <v-row justify="center">
        <v-col>
            <v-card-title style="margin-top: 30px;margin-left: 40px; ">
                <span class="text-h5">เพิ่มข้อมูลพนักงาน</span>
            </v-card-title>

            <v-card-text style="padding: 30px;">
                <v-container>
                    <v-row justify="center">
                        <v-col cols="12" sm="10" md="4">
                            
                                <v-text-field ref="fname" v-model="fname" :rules="[() => !!fname || 'กรุณากรอกข้อมูล']"
                                    :error-messages="errorMessages" label="firstName" variant="solo"
                                    required></v-text-field>
                            
                        </v-col>
                        <v-col cols="12" sm="10" md="4">
                            
                                <v-text-field ref="lname" v-model="lname" :rules="[() => !!lname || 'กรุณากรอกข้อมูล']"
                                    :error-messages="errorMessages" label="LastName" variant="solo" required></v-text-field>
                            
                        </v-col>
                        <v-col cols="12" sm="10" md="4">
                         
                                <v-text-field ref="nickname" v-model="nickname"
                                    :rules="[() => !!nickname || 'กรุณากรอกข้อมูล']" :error-messages="errorMessages"
                                    label="NickName" variant="solo" required></v-text-field>
                            
                        </v-col>
                        <v-col cols="12" sm="10" md="4">
                           
                                <v-text-field ref="Pnumber" v-model="Pnumber"
                                    :rules="[() => !!Pnumber || 'กรุณากรอกข้อมูล']" :error-messages="errorMessages"
                                    label="PhoneNumber" variant="solo" required></v-text-field>
                            
                        </v-col>
                        <v-col cols="12" sm="10" md="8">
                           
                                <v-text-field ref="email" v-model="email" :rules="[() => !!email || 'กรุณากรอกข้อมูล']"
                                    :error-messages="errorMessages" label="Email" variant="solo" required></v-text-field>
                            
                        </v-col>
                        <v-col cols="12" sm="10" md="4">
                            
                                <v-text-field ref="age" v-model="age" :rules="[() => !!age || 'กรุณากรอกข้อมูล']"
                                    label="Age" variant="solo" required></v-text-field>
                            
                        </v-col>
                        <v-col cols="12" sm="10" md="4">
                            
                                <v-autocomplete ref="Positions" v-model="Positions"
                                    :rules="[() => !!Positions || 'กรุณากรอกข้อมูล']" :items="Position" label="Positions"
                                    placeholder="Select..." variant="solo" required></v-autocomplete>
                            
                        </v-col>
                        <br>




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

                        
                    </v-row>
               
                </v-container>

            </v-card-text>


        


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

        Position: ['marketing',
            'developer',
            'HumanResouces',
            'UX/UI Design',],


        errorMessages: '',
        fname: null,
        lname: null,
        nickname: null,
        Pnumber: null,
        email: null,
        age: null,

        formHasErrors: false,
    }),


    computed: {
        form() {
            return {
                fname: this.fname,
                lname: this.lanme,
                nickname: this.nickname,
                Pnumber: this.Pnumber,
                email: this.email,
                age: this.age,

            }
        },
    },

    watch: {
        name() {
            this.errorMessages = ''
        },
    },

    methods: {
        addressCheck() {
            this.errorMessages = this.fname && !this.lname
                ? `Hey! I'm required`
                : ''

            return true
        },
        resetForm() {
            this.errorMessages = []
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
                this.$refs[f].reset()
            })
        },
        submit() {
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
                if (!this.form[f]) this.formHasErrors = true

                this.$refs[f].validate(true)
            })
        },
    },






}
</script>