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

        //if head.next is not null
        if (dupHead[key] == null) {
            return dupHead;
        }

        if (key === 'next') {
            //iterate over head.next

            var secHead = dupHead[key];

            for (let second in secHead) {

                //save the head.data in a other variable named next
                if (second === 'data') {
                    var next = secHead[second];

                    console.log("next ->", next);
                    console.log("last ->", last);

                    //if last and next are the same                                   
                    if (next === last) {
                        console.log("DETECTED A SIMILAR VALUES");
                        console.log("The Same ->", next, last);

                        //then delete the key-value data of next
                        delete secHead[second]
                    }

                }

                //is there another next value?
                if (secHead.next) {
                    console.log('next value', secHead.next);

                    //make refrence to the next obj
                    let thirdHead = secHead.next;

                    //do another for in
                    for (let third in thirdHead) {
                        //check values
                    }

                }

                //return duplicate head  
                console.log('returned, did not hit any ifs')
                return dupHead
            }
        }
    }
}