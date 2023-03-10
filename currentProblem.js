function permutations(string) {
    let arr = string.split("");
    let results = [];

    function swap(arr, i, j) {
        const temp = arr[i];

        arr[i] = arr[j];
        arr[j] = temp;
    }

    function permuteHelper(arr, startIndex) {
        if (startIndex === arr.length - 1) {
            results.push(arr.join(""));
        } else {
            for (let i = startIndex; i < arr.length; i++) {
                swap(arr, startIndex, i);
                permuteHelper(arr, startIndex + 1);
                swap(arr, startIndex, i);
            }
        }
    }

    permuteHelper(arr, 0);
    return [...new Set(results)];
}