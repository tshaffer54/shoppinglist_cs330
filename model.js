'use strict';
class Item {
    constructor(name, quantity, priority, store, category, price) {
        this.itemname = name;
        this.qty = quantity;
        this.priority = priority;
        this.store = store;
        this.category = category;
        this.price = price;

        this._purchased = false;

    }

    get purchased() {
        return this._purchased;
    }

    set purchased(nv) {
        this._purchased = nv;
        alert(`${this.itemname} was purchased`)
    }
}

class Subject {
    constructor() {
        this.handlers= []
    }

    subscribe(fn) {
        this.handlers.push(fn);
    }

    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(itemname) {
                if (itemname !== fn) {
                    return itemname;
                }
            }
        );
    }

    publish(msg, someobj) {
        let scope = someobj || window;
        for (let fn of this.handlers) {
            fn(scope, msg)
        }
    }
}


class ShoppingList extends Subject {
    constructor() {
        super();
        this.newItems = [];
        this.oldItems = [];
    }

    addItem(it) {
        this.newItems.push(it);
        this.publish('newitem', this)
    }
}