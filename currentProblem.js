function findOutlier(int) {
    let int2 = [...int];

    let even = 0;
    let odd = 0;

    for (let i = 0; i < int2.length; i++) {
        if (int2[i] < 0) int2[i] = Math.abs(int2[i]);

        int2[i] % 2 === 0 ? odd++ : even++;
    }

    if (odd > even) {
        for (let i = 0; i < int2.length; i++) {
            if (int2[i] % 2) return int[i];
        }
    } else {
        for (let i = 0; i < int2.length; i++) {
            if (!(int2[i] % 2)) return int[i];
        }
    }
}