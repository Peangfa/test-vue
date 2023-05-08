<template>
    <v-data-table :headers="headers" :items="desserts" :search="search" :sort-by="[{ key: 'calories', order: 'asc' }]"
        class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>

                <v-toolbar-title>ตารางการลา</v-toolbar-title>


                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-text-field v-model="search" label="Search" single-line variant="solo" hide-details></v-text-field>
                <v-dialog v-model="dialog" max-width="1000px">
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" dark class="mb-2" v-bind="props">
                            New Item
                        </v-btn>
                    </template>


                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.name" label="ชื่อ-นามสกุล" variant="solo"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select v-model="editedItem.calories" label="ประเภทการลา"
                                            :items="['ลากิจ', 'ลาป่วย', 'ลาพักร้อน',]" variant="solo" required>
                                        </v-select>
                                    </v-col>
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
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.carbs" label="สังกัดบริษัท"
                                            variant="solo"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <!-- <v-text-field v-model="editedItem.protein" label="ใบรับรองแพทย์"></v-text-field> -->
                                        <v-file-input v-model="selectedFile" variant="solo" label="Choose a file"
                                            @change="handleFileUpload"></v-file-input>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="close">
                                Cancel
                            </v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="save">
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">คุณแน่ใจว่าจะลบรายการนี้ใช่มั้ย</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue-darken-1" variant="text" @click="closeDelete">ยกเลิก</v-btn>
                            <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">ตกลง</v-btn>

                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <!-- <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                mdi-pencil
            </v-icon>
            <v-icon size="small" @click="deleteItem(item.raw)">
                mdi-delete
            </v-icon> -->
            <v-btn prepend-icon="mdi-vuetify" color="success" variant="tonal">
                อนุมัติ
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn prepend-icon="mdi-vuetify" color="error" variant="tonal">
                ไม่อนุมัติ
            </v-btn>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                Reset
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: 'Dashboard',
    data: () => ({
        dialog: false,
        dialogDelete: false,
        search: '',
        files: [],
        date: null,
        trip: {
            name: '',
            location: null,
            start: null,
            end: null,
        },

        headers: [
            {
                title: 'ชื่อ',
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: 'ประเภทการลา', align: 'end', key: 'typeLeave' },
            { title: 'วันที่', align: 'end', key: 'date' },
            { title: 'สังกัดบริษัท', align: 'end', key: 'group' },
            { title: 'ใบรับรองแพทย์', align: 'end', key: 'certificat' },
            { title: 'สถานะ', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            typeLeave: '',
            date: '',
            group: '',
            certificat: '',
        },
        defaultItem: {
            name: '',
            typeLeave: '',
            date: '',
            group: '',
            certificat: '',
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


        filteredList() {
            return this.desserts.filter(post => {
                return post.typeLeave.toLowerCase().includes(this.search.toLowerCase())
                    || post.name.toLowerCase().includes(this.search.toLowerCase())



            })
        }
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    name: 'Frozen Yogurt',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Ice cream sandwich',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Eclair',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Cupcake',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Gingerbread',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Jelly bean',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Lollipop',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Honeycomb',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 'weserve',
                    certificat: 'img',
                    status: '',
                },
                {
                    name: 'Donut',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'KitKat',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Donut',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'KitKat',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Donut',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'KitKat',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Donut',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    group: 65,
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'KitKat',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Donut',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'KitKat',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'Donut',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
                    certificat: 7,
                    status: '6%',
                },
                {
                    name: 'KitKat',
                    typeLeave: 'ลาป่วย',
                    date: '26/06/65',
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

        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },

    },

}









</script>