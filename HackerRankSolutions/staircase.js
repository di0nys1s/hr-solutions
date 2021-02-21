// Complete the staircase function below.
function staircase(n) {

    let hash = '#'
    let space = ' '
    let result = '';

    for(let i = n - 1; i >= 0; i--) {
        result += space.repeat(i) + hash.repeat(n -i) + '\n';
    }
    
    return console.log(result)

}

// staircase(6)
