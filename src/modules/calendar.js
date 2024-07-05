const calendar = {
  currentMonthDates: (year, month) => {
    const date = new Date(year, month, 0).getDate()
    return [...Array(date)].map((_, i) => i + 1)
  },
  nextMonthDates: (year, month) => {
    const day = new Date(year, month, 0).getDay()
    return [...Array(6 - day)].map((_, i) => i + 1)
  },
  lastMonthDates: (year, month) => {
    const day = new Date(year, month - 1, 0).getDay()
    const date = new Date(year, month - 1, 0).getDate()
    const dates = [...Array(day + 1)].map((_, i) => i + (date - day))
    if (dates.length == 7) {
      return []
    } else {
      return dates
    }
  },
}

export { calendar }
