let name = prompt("Adınızı Giriniz:")

let nameDom = document.querySelector("#name_select")
nameDom.innerHTML = name
let clockDom = document.querySelector("#clock")

function timeShow() {
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let date = new Date()
    let day = days[date.getDay()]
    let noww = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + day
    clockDom.innerHTML = noww
}

timeShow()
setInterval(timeShow, 1000)