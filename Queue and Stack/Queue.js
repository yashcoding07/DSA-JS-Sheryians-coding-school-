// implementation of Queue using LinkedList
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
    }

    enqueue(val){
        let newElem = new Node(val);
        
        if(this.front == null){
            this.front = newElem;
            return
        }
        let temp = this.front;

        while(temp.next != null){
            temp = temp.next;
        }

        temp.next = newElem; 
    }

    dequeue(){
        if(this.front == null){
            console.log("Queue is empty.");
            return;
        }

        this.front = this.front.next;
    }

    printQueue(){
        if(this.front == null){
            console.log("Queue is empty.");
            return;
        }

        let temp = this.front;

        while(temp != null){
            process.stdout.write(temp.val + " ");
            temp = temp.next;
        }
        console.log();
    }
}

let obj = new Queue();
obj.enqueue(10);
obj.enqueue(20);
obj.enqueue(30);
obj.enqueue(40);
obj.printQueue();
obj.dequeue();
obj.printQueue();

// implementation of Queue using Array.

class Queue2{
    constructor(){
        this.q = [];
    }

    offer(val){
        this.q.push(val);
    }

    poll(){
        if(this.q.length == 0){
            console.log("Queue is empty.");
            return;
        }

        return this.q.shift();
    }
}

let obj2 = new Queue2();
obj2.offer(10);
obj2.offer(20);
obj2.offer(30);
obj2.offer(40);
console.log(obj2.q);
obj2.poll();
console.log(obj2.q);
