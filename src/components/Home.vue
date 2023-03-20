<template>
  <h2 style="padding-left: 20px; padding-top: 20px; color: black">หน้าหลัก</h2>
  <v-container style="padding: 20px">
    <v-row>
      <v-col sm="12" md="6">
        <v-card
          style="padding-left: 15px; margin-top: 40px; border-radius: 16px"
          elevation="2"
          max-width="600"
          rounded="16"
          border-radius="16px"
          class="pa-4 mx-auto"
        >
          <v-list-item-title class="text-h5 mb-1">
            ยินดีต้อนรับ คุณสุชาดา ศิริโกศล
          </v-list-item-title>
          <br>
          <p class="text-left  text-h6 mb-1">
         ขอให้มีความสุขกับการทำงานในวันนี้ !
    </p>
          <p class="text-left  text-h8 mb-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
          <v-col sm="12" md="4" >
            <v-img src="../assets/Working.png" alt="Working"></v-img>
          </v-col>
        </v-card>
      </v-col>

      <v-col sm="12" md="6">
        <v-img src="../assets/Hello.png" alt="Hello"></v-img>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="12" md="6">
        <div style="padding-left: 15px; margin-top: 30px">
          <v-btn size="large"  color="#FDE10A" rounded="pill">ข่าวสารและอีเวนต์ต่างๆ</v-btn>
        </div>
        <br />

        <v-card-text>
          <div class="text-body-1">
            <v-icon>mdi-calendar-month</v-icon>วันที่ 5 มกราคม 2566
          </div>
          <div class="text-body-1 text--primary">
            ซินเจียยู่อี่ ซินนี้ฮวดไช้ ตรุษจีนปีนี้ อิ่มปังรับอั่งเปา
            เพียงเปิดแอป WESERVE เมื่อสั่งอาหารทุก ฿500 ขึ้นไป รับอั่งเปากินฟรี!
            ฿880 อยากเฮง ลุ้นกินฟรีแบบนี้ ไม่ควรพลาด!
          </div>
        </v-card-text>

        <v-card-text>
          <div class="text-body-1">
            <v-icon>mdi-calendar-month</v-icon>วันที่ 14 กุมภาพันธ์ 2566
          </div>
          <div class="text-body-1 text--primary">
            ขอเชิญทุกคนมาร่วมฉลองความรักอันไร้ขอบเขตในเดือนแห่งความรักนี้ กับงาน
            ‘Love is Love : Love has no boundaries’
            ที่มาพร้อมกับหลากหลายกิจกรรมส่งต่อความรักในทุกรูปแบบ
          </div>
        </v-card-text>

        <v-card-text>
          <div class="text-body-1">
            <v-icon>mdi-calendar-month</v-icon>วันที่ 5 มีนาคม 2566
          </div>
          <div class="text-body-1 text--primary">
            ขอเชิญเข้าร่วมทำบุญทอดกฐิน ณ วัดฉลอง
          </div>
        </v-card-text>

        <v-card-text>
          <div class="text-body-1">
            <v-icon>mdi-calendar-month</v-icon>วันที่ 14 มีนาคม 2566
          </div>
          <div class="text-body-1 text--primary">
            OPEN HOUSE
            ขอเชิญทุกคนมาร่วมฉลองความรักอันไร้ขอบเขตในเดือนแห่งความรักนี้กับงาน
            ‘Love is Love : Love has no boundaries’
            ที่มาพร้อมกับหลากหลายกิจกรรมส่งต่อความรักในทุกรูปแบบ
          </div>
        </v-card-text>
      </v-col>
     

      <v-col sm="12" md="6">
        <v-card
          elevation="3"
          style="padding-left: 15px; margin-top: 40px; border-radius: 16px"
        >
          <v-card-title >กิจกรรมของวันนี้</v-card-title>

          <v-timeline side="end" align="start">
            <v-timeline-item dot-color="green" size="small">
              <div class="d-flex">
                <strong class="me-4"
                  >09.30 น.
                  <div class=""></div
                ></strong>
                <div>
                  <strong>Scrum meeting</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="green" size="small">
              <div class="d-flex">
                <strong class="me-4"
                  >10.00 น.
                  <div class=""></div
                ></strong>
                <div>
                  <strong>Scrum meeting</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="green" size="small">
              <div class="d-flex">
                <strong class="me-4"
                  >11.00 น.
                  <div class=""></div
                ></strong>
                <div>
                  <strong>Scrum meeting</strong>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="green" size="small">
              <div class="d-flex">
                <strong class="me-4">14.00 น.</strong>
                <div>
                  <strong>ประชุมกับลูกค้า</strong>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="green" size="small">
              <div class="d-flex">
                <strong class="me-4">15.00 น.</strong>
                <div>
                  <strong>ซื้อของเข้าออฟฟิศ</strong>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="green" size="small">
              <div class="d-flex">
                <strong class="me-4">17.30 น.</strong>
                <div>
                  <strong>เล่นเกม</strong>
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item dot-color="green" size="small">
              <div class="d-flex">
                <strong class="me-4">18.00 น.</strong>
                <div>
                  <strong>เคลียร์งาน</strong>
                </div>
              </div>
            </v-timeline-item>

            <v-timeline-item dot-color="green" size="small">
              <div class="d-flex">
                <strong class="me-4">19.30 น.</strong>
                <div>
                  <strong>ทำ OT</strong>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

export default {
  name: 'Home',

  data: () => ({
  }),
}
</script>