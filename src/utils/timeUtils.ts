export function milisecondsToTime(timestamp: number) {
    const date = new Date(timestamp);
    const miliseconds = date.getMilliseconds()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    return `
        ${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${miliseconds < 100 ? '0' + miliseconds : miliseconds < 10 ? '00' + miliseconds : miliseconds} 
    `
}

export function getSeconds(timestamp: number) {
    return Math.trunc(timestamp / 1000)
}