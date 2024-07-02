<script setup>
import { ref } from "vue"
import hsl from "hsl-to-hex"

const ruledLine = ref("none")
const font = ref("Shippori Mincho") // "RocknRoll One", "Zen Antique Soft", "Sawarabi Gothic", "Klee One", "Zen Old Mincho", "Shippori Mincho", "Sawarabi Mincho", "Noto Serif JP"
const color = Math.random() * 360
const colorDark = ref(hsl(color, 56, 31))
const colorLight = ref(hsl(color, 50, 92))
const colorGray = ref(hsl(color, 39, 67))

const miomeigen = ref("名言")
const meigenFontSize = ref("8mm")
const meigenLineHeight = ref("8mm")

const month = ref("01")
const year = ref("2024")
const lastMonthDates = ref([...Array(1)].map((_, i) => i + 31))
const dates = ref([...Array(31)].map((_, i) => i + 1))
const NextMonthDates = ref([...Array(3)].map((_, i) => i + 1))
const holidays = ref([1, 6, 8])
</script>

<template>
  <div class="container">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="contents">
      <div class="image">
      </div>
      <div class="meigen">
        <pre class="meigenContent">{{ miomeigen }}</pre>
      </div>
      <div class="calendar">
        <div class="calendarContainer">
          <div class="calendarHeader">
            <span class="month">{{ month }}</span>
            <span class="year">{{ " / " + year }}</span>
          </div>
          <div class="week">
            <div>日</div>
            <div>月</div>
            <div>火</div>
            <div>水</div>
            <div>木</div>
            <div>金</div>
            <div>土</div>
          </div>
          <div class="calendarTable">
            <div v-for="date in lastMonthDates" class="date dateGray">
              <div>{{ date }}</div>
            </div>
            <template v-for="date in dates">
              <div v-if="holidays.includes(date)" class="date holiday">
                <div>{{ date }}</div>
              </div>
              <div v-else class="date">
                <div>{{ date }}</div>
              </div>
            </template>
            <div v-for="date in NextMonthDates" class="date dateGray">
              <div>{{ date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box3"></div>
  </div>
</template>

<style scoped>
.container {
  font-family: v-bind(font);
}

.box1 {
  width: 200mm;
  height: 80mm;
  position: absolute;
  top: 10mm;
  left: 0;
  border-top: 0.3pt black solid;
  border-bottom: 0.3pt black solid;
}

.box2 {
  width: 180mm;
  height: 100mm;
  position: absolute;
  top: 0;
  left: 10mm;
  border-left: 0.3pt black solid;
  border-right: 0.3pt black solid;
}

.box3 {
  width: 180mm;
  height: 80mm;
  position: absolute;
  top: 10mm;
  left: 10mm;
  border: 0.3pt black solid;
  display: v-bind(ruledLine);
}

.contents {
  width: 190mm;
  height: 90mm;
  position: absolute;
  top: 5mm;
  left: 5mm;
  display: flex;
}

.contents>div {
  height: 90mm;
}

.image {
  width: 75mm;
}

.meigen {
  width: 40mm;
  background-color: v-bind(colorDark);
  display: flex;
  justify-content: center;
  align-items: center;
}

.meigenContent {
  writing-mode: vertical-rl;
  color: white;
  font-size: v-bind(meigenFontSize);
  line-height: v-bind(meigenLineHeight);
}

.calendar {
  width: 75mm;
  background-color: v-bind(colorLight);
}

.calendarContainer {
  width: 70mm;
  height: 80mm;
  margin-top: 5mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.calendarHeader {
  margin-bottom: 5mm;
  color: v-bind(colorDark);
  letter-spacing: 0.7mm;
}

.month {
  font-size: 7mm;
}

.year {
  font-size: 4mm;
}

.week {
  display: flex;
  justify-content: space-between;
  border-top: 0.3pt v-bind(colorDark) solid;
  border-bottom: 0.3pt v-bind(colorDark) solid;
  width: 55mm;
  padding-top: 0.7mm;
  padding-bottom: 0.9mm;
  margin-bottom: 2.8mm;
}

.week>div {
  font-size: 2.5mm;
  width: 7mm;
  text-align: center;
  color: v-bind(colorDark);
}

.calendarTable {
  width: 55mm;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.date {
  color: v-bind(colorDark);
  border-radius: 1000mm;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6mm;
  height: 6mm;
  font-size: 3.5mm;
  margin: 0.5mm 0.5mm 1.8mm 0.5mm;
}

.holiday {
  color: v-bind(colorDark);
  background-color: white;
}

.dateGray {
  color: v-bind(colorGray);
}

.date>div {
  margin-bottom: 0.4mm;
}
</style>
