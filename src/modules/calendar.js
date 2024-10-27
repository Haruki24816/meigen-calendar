const calendar = {
  currentMonthDates(year, month) {
    const date = new Date(year, month, 0).getDate()
    return [...Array(date)].map((_, i) => i + 1)
  },
  nextMonthDates(year, month) {
    const day = new Date(year, month, 0).getDay()
    return [...Array(6 - day)].map((_, i) => i + 1)
  },
  lastMonthDates(year, month) {
    const day = new Date(year, month - 1, 0).getDay()
    const date = new Date(year, month - 1, 0).getDate()
    const dates = [...Array(day + 1)].map((_, i) => i + (date - day))
    if (dates.length == 7) {
      return []
    } else {
      return dates
    }
  },
  calendarArray(year, month) {
    const lastMonthDates = this.lastMonthDates(year, month)
    const currentMonthDates = this.currentMonthDates(year, month)
    const nextMonthDates = this.nextMonthDates(year, month)
    let calendarArray = []
    for (const date of lastMonthDates) {
      calendarArray.push({
        date: date,
        class: ["date", "outOfMonth"]
      })
    }
    for (const date of currentMonthDates) {
      calendarArray.push({
        date: date,
        class: ["date"]
      })
    }
    for (const date of nextMonthDates) {
      calendarArray.push({
        date: date,
        class: ["date", "outOfMonth"]
      })
    }
    for (const index of [0, 7, 14, 21, 28, 35]) {
      if (calendarArray[index] != undefined) {
        calendarArray[index].class.push("sun")
      }
    }
    for (const index of [6, 13, 20, 27, 34, 41]) {
      if (calendarArray[index] != undefined) {
        calendarArray[index].class.push("sat")
      }
    }
    return calendarArray
  }
}

export { calendar }
