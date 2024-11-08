function sleep_s(time) {
    return new Promise(resolve => setTimeout(resolve, time * 1000));
}
function sleep_ms(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export {sleep_ms, sleep_s}
