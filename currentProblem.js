function reverseWords(str) {
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").reverse().join("");
    }

    return arr.join(" ");
}