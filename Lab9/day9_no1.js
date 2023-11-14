class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    add(data) {
        if (this.next == null) {
            this.next = new LinkedList(data);
        }
        else {
            this.next.add(data);
        }
    }

    print() {
        console.log(this.data);
        if (this.next) {
            this.next.print();
        }
    }

    remove(val, prev) {
        if (this.data === val) {
            prev.next = this.next;
        } else {
            if (this.next)
                this.next.remove(val, this);
        }
    }
}

let linkedlist = new LinkedList(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};