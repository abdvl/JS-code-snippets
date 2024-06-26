function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    this.isPresent = function(root, val) {
        // Add your code here
        if(!val){
            return 0
        }
        if(root.data == val){
            return 1
        }
        if(root.right && val >= root.data ){
            return this.isPresent(root.right, val)
        }
        if(root.left && val < root.data ){
            return this.isPresent(root.left, val)
        }
        return 0
    }
}
