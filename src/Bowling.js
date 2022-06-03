
function bowlingScore(roll1, roll2) {
    let finalScore = 0;
    let runningScore = [];

    for (let frame = 0; frame < 10; frame++) {
        let frameScore = 0;

        //last frame
        if (frame === 9 && runningScore[frame - 1] === 10) {
            if (roll1 != 10) { //spare
                finalScore += roll1;
            } else { //strike
                for (let i = 0; i < 2; i++) {
                    finalScore += roll1;
                }
            }
        }

        //spare and strike check
        if (runningScore[frame] != 0) {
            //spare check
            if (runningScore[frame - 1] === 10 && roll1 != 10) {
                finalScore += roll1;
            } 
            else if (runningScore[frame - 1] === 10) { //strike check
                for (let i = 0; i < 2; i++) {
                    finalScore += roll1;
                }
            }
        }



        frameScore = roll1 + roll2;
        runningScore.push(frameScore);
        finalScore += frameScore;
    }

    return finalScore;
}

module.exports = bowlingScore;






// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;