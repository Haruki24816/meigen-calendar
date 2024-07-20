<script setup>
import { ref, computed } from "vue"
import hsl from "hsl-to-hex"
import { calendar } from "../modules/calendar"

const props = defineProps(["generalData", "sectionData", "month"])

const printMode = computed(() => { return (props.generalData.tonbo.data) })
const font = computed(() => { return props.generalData.font.data })
const colorDark = computed(() => { return hsl(props.sectionData.color.data, 56, 31) })
const colorLight = computed(() => { return hsl(props.sectionData.color.data, 50, 92) })
const colorGray = computed(() => { return hsl(props.sectionData.color.data, 39, 67) })

const imageData = computed(() => { return props.sectionData.image.data })

const meigenText = computed(() => { return props.sectionData.meigenText.data.split("\n") })
const meigenPosition = computed(() => { return props.sectionData.meigenPosition.data })
const meigenOffset = computed(() => { return props.sectionData.meigenOffset.data + "mm" })
const meigenFontSize = computed(() => { return props.sectionData.meigenFontSize.data + "mm" })
const meigenLineHeight = computed(() => {
  if (Math.round(props.sectionData.meigenLineHeight.data) > Math.round(props.sectionData.meigenFontSize.data * 0.8)) {
    return props.sectionData.meigenLineHeight.data + "mm"
  } else {
    return props.sectionData.meigenFontSize.data * 0.8 + "mm"
  }
})

const month = computed(() => { return String(props.month).padStart(2, "0") })
const year = computed(() => { return props.generalData.year.data })
const lastMonthDates = computed(() => { return calendar.lastMonthDates(props.generalData.year.data, props.month) })
const dates = computed(() => { return calendar.currentMonthDates(props.generalData.year.data, props.month) })
const NextMonthDates = computed(() => { return calendar.nextMonthDates(props.generalData.year.data, props.month) })
const holidays = computed(() => { return props.sectionData.holidays.data })
</script>

<template>
  <div class="containerBox">
    <div v-if="printMode" class="box1"></div>
    <div v-else class="box1 whiteBox"></div>
    <div v-if="printMode" class="box2"></div>
    <div v-else class="box2 whiteBox"></div>
    <div v-if="printMode" class="box3"></div>
    <div v-else class="box3 whiteBox"></div>
    <div v-if="printMode" class="box4"></div>
    <div v-else class="box4 whiteBox"></div>
    <div class="contents">
      <div class="image">
        <img :src="imageData">
      </div>
      <div class="meigen">
        <div v-for="meigenLine in meigenText" class="meigenLine">
          {{ meigenLine }}
        </div>
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
              <div v-if="holidays.includes(date)" class="date holiday" @click="$emit('clickHoliday', date)">
                <div>{{ date }}</div>
              </div>
              <div v-else class="date" @click="$emit('clickHoliday', date)">
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
  </div>
</template>

<style scoped>
.containerBox {
  font-family: v-bind(font);
  position: relative;
  width: 200mm;
  height: 92mm;
  line-height: 1;
}

.contents {
  width: 190mm;
  height: 86mm;
  position: absolute;
  top: 3mm;
  left: 5mm;
  display: flex;
}

.contents>div {
  height: 86mm;
}

.image {
  width: 75mm;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: v-bind(colorLight);
}

.image>img {
  height: 100%;
}

.meigen {
  width: 40mm;
  padding-top: 3mm;
  padding-bottom: 3mm;
  background-color: v-bind(colorDark);
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: v-bind(meigenPosition);
  overflow: hidden;
}

.meigenLine {
  writing-mode: vertical-rl;
  color: white;
  font-size: v-bind(meigenFontSize);
  line-height: v-bind(meigenLineHeight);
  font-family: v-bind(font);
  margin: 0;
  transform: translateY(v-bind("meigenOffset"));
}

.calendar {
  width: 75mm;
  background-color: v-bind(colorLight);
  user-select: none;
}

.calendarContainer {
  width: 70mm;
  height: 80mm;
  margin-top: 3mm;
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

.date:hover {
  background-color: rgba(255, 255, 255, 0.5);
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

.box1 {
  width: 200mm;
  height: 6mm;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 0.3pt black solid;
}

.box2 {
  width: 10mm;
  height: 92mm;
  position: absolute;
  top: 0;
  left: 190mm;
  border-left: 0.3pt black solid;
}

.box3 {
  width: 200mm;
  height: 6mm;
  position: absolute;
  top: 86mm;
  left: 0;
  border-top: 0.3pt black solid;
}

.box4 {
  width: 10mm;
  height: 92mm;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 0.3pt black solid;
}

.whiteBox {
  background-color: white;
  border: 0;
  z-index: 1;
}
</style>
