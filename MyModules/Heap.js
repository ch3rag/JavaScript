'use strict'
console.clear();
class MinHeap {
    constructor() {
        this._heapSize = -1;
        this._heap = [];
    }

    static fromArray(arr) {
        let heap = new MinHeap();
        if (!Array.isArray(arr)) {
            throw Error("Argument must be an array.");
        }
        for (let i = 0; i < arr.length; i++) {
            heap.insert(arr[i]);
        }
        return heap;
    }

    insert(elem) {
        if (typeof (elem) !== "number") {
            throw Error("Argument must be a number");
        }
        this._heap.push(elem);
        this._heapSize++;
        let parentIndex = parseInt(this._heapSize / 2);
        let currentElem = this._heapSize;
        while (this._heap[currentElem] < this._heap[parentIndex]) {
            [this._heap[parentIndex], this._heap[currentElem]] = [this._heap[currentElem], this._heap[parentIndex]];
            currentElem = parentIndex;
            parentIndex = parseInt(parentIndex / 2);
        }
    }

    extractMin() {
        let ret;
        if (this._heapSize == -1) {
            throw Error("Invalid Operation");
        } else if (this._heapSize == 0) {
            ret = this._heap[0];
            this._heap = [];
            this._heapSize = -1;
        } else {
            ret =  this._heap[0];
            this._heap[0] = this._heap.pop();
            this._heapSize--;
            let parent = 0;
            let rchild = 1;
            let lchild = 2;
            while(this._heap[parent] > this._heap[rchild] || this._heap[parent] > this._heap[lchild]) {
                if(this._heap[lchild] > this._heap[rchild] && this._heap[rchild]) {
                    [this._heap[parent], this._heap[rchild]] = 
                    [this._heap[rchild], this._heap[parent]]
                    parent = rchild;
                } else if(this._heap[lchild]) {
                    [this._heap[parent], this._heap[lchild]] = 
                    [this._heap[lchild], this._heap[parent]]
                    parent = lchild;
                }
                lchild = parent * 2;
                rchild = parent * 2 + 1;
            }
        }
        return ret;
    }
}

let myHeap = MinHeap.fromArray([3,2,1,7 , 8,  4,  10 , 16,  12]);
console.log(myHeap._heap);
console.log(myHeap.extractMin());
console.log(myHeap.extractMin());
console.log(myHeap.extractMin());
console.log(myHeap.extractMin());
console.log(myHeap.extractMin());
console.log(myHeap.extractMin());
console.log(myHeap.extractMin());
console.log(myHeap.extractMin());
console.log(myHeap.extractMin());

console.log(myHeap._heap);

