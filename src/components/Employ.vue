<template>
  <div v-if="change == 1" >
   
  
    <h2 style="margin-top: 30px;margin-left: 40px; ">ข้อมูลพนักงาน</h2>
    <v-row style="display: flex; justify-content: flex-end;flex-direction: column; margin: 10px; align-items: end;">
      <v-col style="    display: flex;  justify-content: flex-end;">
        <v-btn prepend-icon="mdi-plus" @click="myadd()">
          เพิ่มข้อมูลพนักงาน
        </v-btn>


      </v-col>
      <v-col md="4" sm="12">

        <v-select label="ตำแหน่ง" :items="['Human Resouces', 'Web Developer', 'Marketing',]"
          variant="solo" prepend-inner-icon="mdi-filter-outline" v-model="Search" ></v-select>

      </v-col>

    </v-row>


    <v-row v-for="i in filteredList " :key="index">
      <v-col md="4" sm="12" style="display: flex;" @click="myClick(i)">
        <div style="display: flex; padding: 20px;">
          <v-card style="background-color: #333333; padding: 20px; margin: 5px; width: 400px;height: 500px;">
            <v-img src="../assets/Korean.jpg" height="300px"></v-img>
            <v-card-title style="color: aliceblue; text-align: center;"> {{ i.name }}</v-card-title>
            <v-card-title style="color: aliceblue; text-align: center;"> {{ i.position }}</v-card-title>

          </v-card>

        </div>
      </v-col>
      <!-- {{ count }}  -->
    </v-row>
  </div>
  <div v-else-if="change == 4">
    <Addemploy />

  </div>
  <div v-else>
    <Edit @back="change = 1;" :user="select_user"  @backstep="change = 1;"/>
  </div>
</template>


<script>
import { defineComponent } from 'vue';
import Edit from '../components/Edit.vue';
import Addemploy from '@/components/Addemploy.vue';

import axios from 'axios';
import { mapActions } from 'vuex'
// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });


export default {
  name: 'Employ',
  components: {
    Edit,
    Addemploy,
  },

  data: () => ({
    dialog: false,
    show: false,
    select_user: "",
    Search:'',
   
    change: 1,
   employ: [{
      id: 1,
      name: "สุชาดา ศิริโกศล",
      nickname: 'มุก',
      position: "Human Resouces",
      mail: "Suchada.mook@weserve.co.th",
      birthdate:'25 พฤษภาคม 2538',
      phonenum:'0897654321',
      
               
             
    },

    {
      id: 2,
      name: "สุรเกียรติ ศิริโกศล",
      nickname: 'บอย',
      position: "Web Developer",
      mail: "Surakain.boy@weserve.co.th",
      birthdate:'2 เมษายน 2538',
      phonenum:'0897621451',
      
    },

    {
      id: 3,
      name: "นิชาภา กองแก้ว",
      nickname: 'นิว',
      position: "Marketing",
      mail: "Nichapha.new@weserve.co.th",
      birthdate:'15 กันยายน 2538',
      phonenum:'0812365487',
    },
    ]

  }),
  methods: {

    myClick(user) {
      this.select_user = user;
      this.change = 2;
    },
    myadd() {
      this.change = 4;
    },

  },

  computed: {
    count() {
      return this.$store.state.getEmpolyee
    },
    
    filteredList() {
      return this.employ.filter(post => {
        return post.position.toLowerCase().includes(this.Search.toLowerCase()) 
        || post.name.toLowerCase().includes(this.Search.toLowerCase()) 
        
          
        
      })
    }
  },
  mounted() {

    const a = this.$store.dispatch('getAPIEMpolsdlsd')
  }
  

}
</script>
