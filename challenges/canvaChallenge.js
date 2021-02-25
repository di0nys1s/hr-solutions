function maxLength(a, k) {

    /*
    const arrSorted = [...a].sort();

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let subArr = [];

    while(arrSorted.length) {
        const smallestVal = arrSorted.shift();
        if (subArr.reduce(reducer, 0) + smallestVal > k) 
            break;
        else
            subArr.push(smallestVal)
    }

    return subArr.length;
    */

}

function maxLength2(a, k) {


    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const arrSorted = [...a].sort();

    let subArr = [];
    for (let i = 0; i < arrSorted.length; i++) {
        for (let j = i + 1; j < arrSorted.length; j++) {
            const subArrTotal = arrSorted.slice(i, j).reduce(reducer, 0)
            const subArrLen = subArr.length
            if (j - i > subArrLen && subArrTotal < k) {
                subArr = arrSorted.slice(i, j);
            }
        }
    }

    console.log('subArr.length', subArr)

    return subArr.length
}

maxLength([3,1,2,1], 4)
maxLength2([3,1,2,1], 4)