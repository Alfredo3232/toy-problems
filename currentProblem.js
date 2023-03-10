function humanReadable(seconds) {
    if (seconds < 60) {
        if (seconds < 10) {
            return `00:00:0${seconds}`;
        }
        return `00:00:${seconds}`;
    }

    console.log(seconds);
}