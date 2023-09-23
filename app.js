const output = document.querySelector('.time')
const timeBtn = document.querySelector('.btn-time')
const dateBtn = document.querySelector('.btn-date')
const fullBtn = document.querySelector('.btn-full')

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

let mode = 'time'

setInterval(update,1000)
update()

function update() {
    output.textContent = format(mode)
}

function format(formatMode) {
    const now = new Date()
    switch(formatMode) {
        case 'date': return now.toLocaleDateString()
        case 'time': return now.toLocaleTimeString()
        case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default: return now.toLocaleTimeString()
    }
}
