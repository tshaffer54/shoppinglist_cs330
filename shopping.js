let stores = ['Fareway', 'Walmart', 'Quillons', 'Caseys', 'Target', 'Amazon'];
let sections = ['Produce', 'Meats', 'Bakery', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Nonperisables'];

let shoppingModel = new ShoppingList();
let myView = new ShoppingView;

function clickon() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price', 'priority'];
    let vals = {};
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
    }
    let it = new Item(vals.itemname, vals.qty, vals.priority, vals.store, vals.category, vals.price);
    shoppingModel.addItem(it);
    myView.redrawList(shoppingModel, 'newitem');
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList);
    for (let s of sList) {
        let opt = document.createElement("option");
        opt.value = s;
        opt.innerHTML = s;
        sel.appendChild(opt);
    }
}

// function retrieveLocal() {
//     myView = JSON.parse(localStorage.getItem('table'));
//     shoppingModel.publish();
// }

$(document).ready(function () {
    populateSelect('store', stores);
    populateSelect('category', sections);
    shoppingModel.localRetrieve();

});
