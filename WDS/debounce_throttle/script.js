const defaultText = document.getElementById('default-text')
const defaultCount = document.getElementById('default-count')
const debounceText = document.getElementById('debounce-text')
const debounceCount = document.getElementById('debounce-count')
const throttleText = document.getElementById('throttle-text')
const throttleCount = document.getElementById('throttle-count')
const input = document.querySelector('input');

const updateDebounceText = debounce((text)=>{
    debounceText.textContent = text
})
const updateThrottleText = throttle((text)=>{
    throttleText.textContent = text
})

input.addEventListener('input', e=>{
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value)
    updateThrottleText(e.target.value)
})

function debounce (cb, delay = 1000) {
    let timeout
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>cb(...args), delay)
    }
}

// things are changing a lot and you wanna be able to make sure you send the most recent request
// resizing or scrolling
function throttle (cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs;
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        }

        cb(...args)
        shouldWait = true;

        setTimeout(timeoutFunc, delay)
    }
}

document.addEventListener('mousemove', e => {
    incrementCount(defaultCount)
    updateDebounceCount()
    updateThrottleCount()
})

function incrementCount (element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1;
}

const updateDebounceCount = debounce(() =>{
    incrementCount(debounceCount)
}, 250)

const updateThrottleCount = throttle(() =>{
    incrementCount(throttleCount)
}, 250)