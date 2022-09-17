'use strict';

(function () {

    const createTable = (col,row) => {

        const table = document.createElement('table');
        table.style.border = "solid 2px black";

        let count = 0;

        for (let i = 0; i < row; i++){
            const tableRow = document.createElement('tr')
            tableRow.style.border = "solid 2px black";

            for (let j = 0; j<col; j++){
                const tableCol = document.createElement('td')

                count +=1
                tableCol.innerHTML= `${count}`;
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

    const newTable = createTable(10,10);

    document.body.append(newTable)
})()