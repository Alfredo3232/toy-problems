function DNAStrand(dna) {
    let empty = '';
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            empty += 'T'
        }
        if (dna[i] === 'T') {
            empty += 'A'
        }
        if (dna[i] === 'C') {
            empty += 'G'
        }
        if (dna[i] === 'G') {
            empty += 'C'
        }
    }
    return empty
}