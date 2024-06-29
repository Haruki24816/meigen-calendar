<script setup>
import { ref } from "vue"
import hsl from "hsl-to-hex"

const ruledLine = ref("block")

const font = ref("Shippori Mincho")

const color = Math.random() * 360
const colorDark = ref(hsl(color, 56, 31))
const colorLight = ref(hsl(color, 50, 92))
const colorGray = ref(hsl(color, 39, 67))

const miomeigen = ref("名言\n名言")
const meigenFontSize = ref("5mm")
const meigenLineHeight = ref("10mm")

const lastMonthDates = ref([...Array(5)].map((_, i) => i + 25))
const dates = ref([...Array(31)].map((_, i) => i + 1))
const NextMonthDates = ref([...Array(6)].map((_, i) => i + 1))
const holidays = ref([20])
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

.week {
  display: flex;
  justify-content: space-between;
  border-top: 0.3pt v-bind(colorDark) solid;
  border-bottom: 0.3pt v-bind(colorDark) solid;
  width: 55mm;
  padding-top: 0.7mm;
  padding-bottom: 0.7mm;
  margin-bottom: 2mm;
}

.week > div {
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
  width: 7mm;
  height: 7mm;
  font-size: 3.5mm;
  margin-bottom: 0.5mm;
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
