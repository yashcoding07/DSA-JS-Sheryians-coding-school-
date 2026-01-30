// Implementation of Stack using Array.
class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
        return this.stack.push(val);
    }

    pop(){
        if(this.stack.length == 0){
            console.log("Stack is empty.");
            return;
        }

        return this.stack.pop();
    }

    peek(){
        return this.stack[0];
    }
}

let obj = new Stack();
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.push(50);
console.log(obj.stack);
obj.pop();
console.log(obj.stack);
console.log(obj.peek());

// Implementation of Stack using Linked list.
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack2{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    push(val){
        let newElem = new Node(val);
        newElem.next = this.top;
        this.top = newElem;
        this.size++;
    }

    pop(){
        if(this.top == null){
            console.log("Stack is empty.");
            return;
        }

        let removedValue = this.top.val;
        this.top = this.top.next;
        this.size--;
        return removedValue;
    }

    peek(){
        if(this.top == null){
            console.log("Stack is empty.");
            return;
        }

        return this.top.val;
    }

    printStack(){
        if(this.top == null){
            console.log("Stack is empty.");
            return;
        }

        let temp = this.top;

        while(temp != null){
            process.stdout.write(temp.val + " ");
            temp = temp.next;
        }
        console.log();
    }
}

let obj2 = new Stack2();
obj2.push(10);
obj2.push(20);
obj2.push(30);
obj2.push(40);
obj2.push(50);
obj2.printStack();
obj2.pop();
obj2.printStack();
console.log(obj2.peek());