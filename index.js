const app = require("express")();
const PORT = 8111;
const tarotCards = require("./tarotCards")


app.listen(PORT, () => {
    console.log("PORT 8111 Active!")
})


app.get("/tarot", (req, res) => {
    let Past = 0;
    let Present = 0;
    let Future = 0;
    let usedNums = [];
    for (let i = 1; i < 4; i += 1) {

        let index = Math.floor(Math.random() * 78);
        if (usedNums.includes(index)) {
            index = Math.floor(Math.random() * 78);
        };
        usedNums.push(index);
        if (i <= 1) {
            Past = tarotCards[index];
        } else if (i <= 2) {
            Present = tarotCards[index];
        } else {
            Future = tarotCards[index];
        };
    };
    res.status(200).send({
        Past,
        Present,
        Future,

    });
});


