function generateHashtag(str) {
    if (str.length > 140) {
        return false;
    }
    if (str.trim() === "") {
        return false;
    }

    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("");
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i][0] = arr[i][0].toUpperCase();

        arr[i] = arr[i].join("");
    }

    arr.unshift("#");

    return arr.join("");
}