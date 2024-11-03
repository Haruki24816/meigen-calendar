<script setup>
import { computed } from "vue"
import { calendar } from "../modules/calendar"
import { store } from "../store"
import hsl from "hsl-to-hex"

const props = defineProps(["month"])
const sectionId = computed(() => { return "wall2024" + props.month })

const font = computed(() => { return store.getOptionData("general", "font") })
const year = computed(() => { return store.getOptionData("general", "year") })
const color = computed(() => { return hsl(store.getOptionData(sectionId.value, "color"), 32, 24) })

const calendarArray = computed(() => {
  return calendar.calendarArray(store.getOptionData("general", "year"), props.month)
})

const holidays = computed(() => { return store.getOptionData(sectionId.value, "holidays") })

function getHoliday(date) {
  if (holidays.value[date] != undefined) {
    return holidays.value[date]
  } else {
    return ""
  }
}

function updateHoliday(date, event) {
  holidays.value[date] = event.target.value
  store.setOptionData(sectionId.value, "holidays", holidays.value)
}
</script>

<template>
  <div class="containerBox">
    <div class="calendarHeader">
      <div class="monthNum">{{ props.month }}</div>
      <div class="monthName">{{ calendar.months[props.month] }}</div>
      <div class="spacer"></div>
      <div class="year">{{ year }}</div>
    </div>
    <div class="calendarTable">
      <div class="day daySun">Sun</div>
      <div class="day">Mon</div>
      <div class="day">Tue</div>
      <div class="day">Wed</div>
      <div class="day">Thu</div>
      <div class="day">Fri</div>
      <div class="day daySat">Sat</div>
      <div v-for="item in calendarArray" :class="item.class">
        <div :class="{ holiday: (getHoliday(item.date) != '') }">{{ item.date }}</div>
        <input type="text" @input="updateHoliday(item.date, $event)" :value="getHoliday(item.date)">
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerBox {
  width: 190mm;
  height: 133.5mm;
  margin: 5mm 0 0 10mm;
  font-family: v-bind("font");
  display: flex;
  flex-direction: column;
}

.calendarHeader {
  flex-grow: 1;
  max-height: 25mm;
  display: flex;
  align-items: end;
  color: v-bind("color");
  padding: 0 5mm 5mm 5mm;
}

.monthNum {
  font-size: 40pt;
  line-height: 100%;
  font-weight: bold;
}

.monthName {
  font-size: 22pt;
  line-height: 100%;
  margin-left: 4mm;
  letter-spacing: 0.4mm;
  font-weight: bold;
}

.spacer {
  flex-grow: 1;
}

.year {
  font-size: 24pt;
  line-height: 100%;
}

.calendarTable {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  border-top: 1.5pt v-bind("color") solid;
  border-bottom: 1.5pt v-bind("color") solid;
}

.day {
  width: calc(100% / 7);
  border-right: 0.3pt v-bind("color") solid;
  color: v-bind("color");
  line-height: 8mm;
  font-size: 14pt;
  letter-spacing: 0.4mm;
  font-weight: bold;
  padding-bottom: 1mm;
}

.daySun {
  color: #f72922;
}

.daySat {
  color: #2363f7;
  border-right: 0;
}

.date {
  width: calc(100% / 7);
  height: 17mm;
  border-top: 0.3pt v-bind("color") solid;
  border-right: 0.3pt v-bind("color") solid;
  color: v-bind("color");
  line-height: 8mm;
  font-size: 16pt;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding-top: 0.5mm;
}

.outOfMonth {
  font-weight: normal;
}

.date>input {
  border: 0;
  text-align: center;
  font-size: 10pt;
  height: 6mm;
  color: #f72922;
  background-color: #00000000;
}

.outOfMonth>input {
  display: none;
}

.sat {
  color: #2363f7;
  border-right: 0;
}

.sun {
  color: #f72922;
}

.holiday {
  color: #f72922;
}
</style>
