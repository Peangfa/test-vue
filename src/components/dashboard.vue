<template>
    <h2 style="margin-top: 30px;margin-left: 40px; ">ตารางการลา</h2>
    <br>
    <v-row style="display: flex;flex-direction: column;align-content: flex-end;padding: 10px;">

        <v-col sm="6" md="6" style="display:flex">

            <v-text-field v-model="Search" variant="solo" label="ค้นหา" single-line hide-details
                @click:append-inner="onClick" style="width: 500px;"></v-text-field>
        </v-col>
        <v-col sm="12" md="6" style="display:flex">
            <v-select label="ประเภทการลา" :items="['ลากิจ', 'ลาป่วย', 'ลาพักร้อน',]" variant="solo" v-model="search"
                style="width: 500px;"></v-select>
        </v-col>


    </v-row>

    <v-row style="padding: 10px;">
        <v-col>
            <v-card>
                <v-table fixed-header height="900px">
                    <thead>
                        <tr>
                            <th class="text-left" style="background-color: #333333; color: white;">
                                ชื่อ
                            </th>
                            <th class="text-left" style="background-color: #333333;color: white;">
                                ประเภทการลา
                            </th>
                            <th class="text-left" style="background-color: #333333;color: white;">
                                วันที่
                            </th>
                            <th class="text-left" style="background-color: #333333;color: white;">
                                สังกัดที่บริษัท
                            </th>
                            <th class="text-left" style="background-color: #333333;color: white;">
                                ใบรับรองแพทย์
                            </th>
                            <th class="text-center" style="background-color: #333333;color: white;">
                                สถานะ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in filteredList" :key="index"> 
                            <td>{{ item.name }}</td>
                            <td>{{ item.typeLeave }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.group }}</td>
                            <td>{{ item.certificat }}</td>
                            <td>

                                <div style="display: flex; justify-content: center;">

                                    <v-btn variant="tonal" color="success">
                                        อนุมัติ
                                    </v-btn>


                                    <v-btn variant="tonal" color="error">
                                        ไม่อนุมัติ
                                    </v-btn>


                                </div>

                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'Dashboard',

    data: () => ({
        loaded: false,
        loading: false,
        Search: "",
        search:'',
      
       


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


        ]


    }),
    computed: {
     
        filteredList() {
      return this.desserts.filter(post => {
        return post.typeLeave.toLowerCase().includes(this.search.toLowerCase()) 
        || post.name.toLowerCase().includes(this.search.toLowerCase()) 
        
          
        
      })
    }
    },
    methods: {
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