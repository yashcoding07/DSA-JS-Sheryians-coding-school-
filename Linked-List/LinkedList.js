// Implementation of linked list.
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtFirst(val){
        const newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.size++;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    };

    deleteAtFirst(){
        if(this.head === null){
            console.log("Empty List");
        }else{
            this.head = this.head.next;
            this.size--;
        }
    }

    insertAtLast(val){
        const NewNode = new Node(val);
        if(this.head == null){
            this.head = NewNode;
            this.size++;
            return;
        }else{
            let temp = this.head;
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = NewNode;
            this.size++;
        }
    };

    deleteAtLast(){
        if(this.head === null){
            console.log("empty list");
        }else{
            if(this.head.next == null){
                this.head = null;
            }else{
                let temp = this.head;
                while(temp.next.next != null){
                    temp = temp.next;
                }
                temp.next = temp.next.next;
                this.size--;
            }
        }  
    }

    insertAtIndex(val, index){
        if(index < 0 || index > this.size){
            console.log("Not Possible");
            return;
        }
        let newNode = new Node(val);
        this.size++;
        if(this.head == null){
            this.head = newNode;
            return;
        }
        let temp = this.head;

        for(let i = 0; i < index - 1; i++){
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;        
    }

    deleteAtIndex(index){
        if(index < 0 || index >= this.size){
            console.log("Invalid index");
            return;            
        }

        if(this.head == null){
            console.log("list is empty.");
            return;
        }
        this.size--;
        let temp = this.head;
        for(let i = 0; i < index - 1; i++){
            temp = temp.next;
        }
        temp.next = temp.next.next;
    }

    printll(){

        if(this.head == null){
            console.log("Empty List");
            return;
        }

        let temp = this.head;
        while(temp != null){
            process.stdout.write(temp.val + " -> ");
            temp = temp.next;
        }
        console.log("Null");
    };
}

let ll = new LinkedList();
ll.insertAtFirst(10);
ll.insertAtFirst(20);
ll.insertAtFirst(30);
ll.insertAtFirst(40);
ll.insertAtFirst(50);
// ll.printll();
// ll.insertAtLast(100);
// ll.insertAtLast(102);
// ll.insertAtLast(103);
// ll.printll();
// ll.deleteAtFirst();
// ll.deleteAtLast();
// ll.printll();
// ll.insertAtIndex(1000, 14);
ll.printll();
ll.deleteAtIndex(3);
ll.printll();