(function () {
    'use strict'
    const random = (max) => {
        let usedNumArray = [];

        return function getRandom() {
            const randomNum = Math.floor(Math.random() * max) + 1;
            if (usedNumArray.length === max) usedNumArray = [];

            if (usedNumArray.includes(randomNum)) {
                return getRandom()
            } else {
                usedNumArray.push(randomNum)
                return randomNum;
            }
        }
    }


    const createTable = (col,row) => {

        const table = document.createElement('table');
        table.style.border = "solid 2px black";

        for (let i = 0; i <= row; i++){
            const tableRow = document.createElement('tr')
            tableRow.style.border = "solid 2px black";

            for (let j = 0; j<=col; j++){
                const tableCol = document.createElement('td')
                const num = random(100);
                tableCol.innerHTML = num()
                tableRow.append(tableCol)

                tableCol.style.border = "solid 2px black";
                tableCol.style.fontSize = "18px";
                tableCol.style.padding = "5px";
                tableCol.style.textAlign = "center";
            }
            table.append(tableRow)

        }
        return table

    }

    const newTable = createTable(55,15);

    document.body.append(newTable)

})()

