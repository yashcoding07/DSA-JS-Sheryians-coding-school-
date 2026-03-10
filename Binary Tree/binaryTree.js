let prompt = require("prompt-sync")();

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    buildTree(){
        let data = prompt("Enter value: ");
        if(data == -1) return null;
        let root = new Node(data);
        console.log("Enter the value of left child of " + data);
        root.left = this.buildTree();
        console.log("Enter the value of right child of " + data);
        root.right = this.buildTree();

        return root;
    }

    preOrder(root){
        if(root == null) return 
        process.stdout.write(root.data + " ");
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    postOrder(root){
        if(root == null) return;
        this.postOrder(root.left);
        this.postOrder(root.right);
        process.stdout.write(root.data + " ");
    }

    inOrder(root){
        if(root == null) return;
        this.inOrder(root.left);
        process.stdout.write(root.data + " ");
        this.inOrder(root.right);
    }
}

let obj = new BinaryTree();
let root = obj.buildTree();
console.log("PreOrder traversal: ");
obj.preOrder(root);
console.log("PostOrder traversal: ");
obj.postOrder(root);
console.log("InOrder traversal: ");
obj.inOrder(root);


/* 
144. Binary Tree Preorder Traversal https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/1943557408/
94. Binary Tree Inorder Traversal https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/1943558687/     
145. Binary Tree Postorder Traversal https://leetcode.com/problems/binary-tree-postorder-traversal/description/ 
104. Maximum Depth of Binary Tree https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/1943544110/
*/