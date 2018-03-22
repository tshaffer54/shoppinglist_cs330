class ShoppingView {
    contructor(model) {
        model.subscribe(this.redrawList.bind(this));
    }

    redrawList(shoppingList, msg) {
        let tbl = document.getElementById("shoppinglist");
        tbl.innerHTML = "";
        for (let item of shoppingList.newItems) {
            this.addRow(item, tbl);
        }
    }

    addRow(item, parent) {
        let row = document.createElement("tr");
        row.classList.add(item.priority);
        let cb = document.createElement("input");
        cb.type = "checkbox";
        cb.classList.add("form-control");
        cb.onclick = function () {
            item.purchased = true;
            setTimeout(function () {
                $(row).remove();
            }, 2000);
            shoppingModel.removeItem();
        };
        row.appendChild(cb);

        for (let val of ['itemname', 'qty', 'store', 'category', 'priority', 'price']) {
            let td = document.createElement("td");
            td.innerHTML = item[val];
            row.appendChild(td);
        }
        parent.appendChild(row);
    }
}