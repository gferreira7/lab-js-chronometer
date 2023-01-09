class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback){
        printTimeCallback()
      }

      }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    // ... your code goes here
    let rightDigit = value % 10
    let leftDigit = Math.floor(value / 10)

    return `${leftDigit}${rightDigit}`
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutes = this.getMinutes()
    minutes = this.computeTwoDigitNumber(minutes)
    let seconds = this.getSeconds()
    seconds = this.computeTwoDigitNumber(seconds)
    return `${minutes}:${seconds}`
  }
}
