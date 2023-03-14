<template>
    <h2 style="margin-top: 30px;margin-left: 40px;">ประวัติการลา</h2>
    <br>
    
        <v-row style="display: flex;flex-direction: column;align-content: flex-end;  padding: 5px">
            <v-col sm="6" md="4">
                <v-select label="ประเภทการลา" :items="['ลากิจ', 'ลาป่วย', 'ลาพักร้อน',]" variant="solo"></v-select>
            </v-col>
            <v-col sm="6" md="4">

                <v-text-field :loading="loading" density="compact" variant="solo" label="ค้นหาชื่อ"
                    append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"></v-text-field>
            </v-col>

        </v-row>





    <v-row style="padding: 20px;">
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
                        <tr v-for="item in desserts" :key="item.name">
                            <td>{{ item.name }}</td>
                            <td>{{ item.typeLeave }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.group }}</td>
                            <td>{{ item.certificat }}</td>
                            <td>

                                <div style="display: flex; justify-content: center;">

                                    <v-btn variant="tonal" style="background-color:#00FF00 ;" >
                                        อนุมัติ
                                    </v-btn>
                                    

                                    <v-btn variant="tonal" style="background-color:#FF3300 ; ">
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
    name: 'History',

    data() {


        return {
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

        }
    }
}









</script>