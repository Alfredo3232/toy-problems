function Node(data) {
    this.data = data;
    this.next = null;
}

function removeDuplicates(head) {
    if (head == null) {
        return null;
    }

    //duplicate head in a variable
    let dupHead = { ...head };

    //iterate over object
    for (let key in dupHead) {

        //save the head.data in a variable named last
        if (key === 'data') {
            var last = dupHead[key];
        }

        //if head.next is null
        if (dupHead[key] == null) {
            return dupHead;
        }

        if (key === 'next') {
            //iterate over head.next

            var secHead = dupHead[key];

            let deleted2 = false;
            for (let second in secHead) {

                //save the head.data in a other variable named next
                if (second === 'data') {
                    var next = secHead[second];

                    //if last and next are the same                                   
                    if (next === last) {
                        console.log("DETECTED A SIMILAR VALUES 1");
                        console.log("The Same ->", next, last);

                        //then delete the key-value data of next
                        delete secHead[second];
                        deleted2 = true;
                    }

                }


                let deleted3 = false;
                //is there another next value?
                if (secHead.next) {

                    //make refrence to the next obj
                    let thirdHead = secHead.next;

                    //do another for in
                    for (let third in thirdHead) {
                        //check values
                        if (third === 'data') {
                            var next2 = thirdHead[third];

                            if (next2 == next) {
                                console.log("DETECTED A SIMILAR VALUES 2");
                                console.log("The Same ->", next2, next);


                                delete thirdHead[third];
                                console.log("delete because of next", thirdHead[third]);
                                deleted3 = true;
                            }

                            if (next2 == last) {
                                console.log("DETECTED A SIMILAR VALUES 3");
                                console.log("The Same ->", next2, last);

                                delete thirdHead[third];
                                console.log("delete because of last", thirdHead[third]);
                                deleted3 = true;
                            }
                        }
                    }
                }

                if (deleted3) {
                    secHead.next = null;
                    return dupHead
                }

                //return duplicate head  
                console.log('returned, did not hit any ifs')
                return dupHead
            }

            if (deleted2) {
                secHead = null;
                return dupHead
            }

        }
    }
}