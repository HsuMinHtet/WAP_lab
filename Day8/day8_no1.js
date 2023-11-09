function LinkedList(data) {
    this.data = data;
    this.next = null;
}

LinkedList.prototype.add = function (data) {
    if (this.next == null) {
        this.next = new LinkedList(data);
    }
    else{
        this.next.add(data);
    }
}

LinkedList.prototype.print = function () {
    console.log(this.data+"and"+ this.next);
    if (this.next) {
        this.next.print();
    }

}
//prev???
LinkedList.prototype.remove= function(val,prev){
    if(this.data===val){
        prev.next=this.next;
    }else{
        if(this.next)
        this.next.remove(val,this);
    }
}

let linkedlist = new LinkedList(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};