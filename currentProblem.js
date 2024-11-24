let count = (str) => {
    if (str.length < 1) return {};

    let count = {};
    for (let i = 0; i < str.length; i++) {
        count[`${str[i]}`] = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) count[`${str[i]}`] += 1;
        }
    }

    return count;
};
