// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let appleCount = 0 
    let orangeCount = 0

    for(let i = 0; i < apples.length; i++) {
        const d = apples[i] + a 
        if(s <= d && d <= t) {
            appleCount++
        }
    }

    for(let i = 0; i < oranges.length; i++) {
        const d = oranges[i] + b
        if(s <= d && d <= t) {
            orangeCount++
        }
    }

    return [appleCount, orangeCount]
}

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4])

module.exports = { countApplesAndOranges };