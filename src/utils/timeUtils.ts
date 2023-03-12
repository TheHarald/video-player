export function milisecondsToTime(timestamp: number) {
    if (timestamp < 0) timestamp = 0
    const date = new Date(timestamp);
    const miliseconds = date.getMilliseconds()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${miliseconds < 10 ? '00' + miliseconds : miliseconds < 100 ? '0' + miliseconds : miliseconds}`
}

export function getSeconds(timestamp: number) {
    if (timestamp < 0) timestamp = 0
    return Math.trunc(timestamp / 1000)
}