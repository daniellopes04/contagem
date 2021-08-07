(function () {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
  
    let bigDay = "Aug 21, 2021 00:00:00"
    let countDown = new Date(bigDay).getTime()

    let x = setInterval(function() {    
        let now = new Date().getTime()
        let distance = countDown - now

        document.getElementById("days").innerText = Math.floor(distance / (day))
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second)

        if (distance < 0) {
            let headline = document.getElementById("headline")
            let countdown = document.getElementById("countdown")
            let content = document.getElementById("content")

            headline.innerText = "Chegou o dia!"
            countdown.style.display = "none"
            content.style.display = "block"

            clearInterval(x)
        }

    }, 0)
}())