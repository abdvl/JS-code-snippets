class PriorityQueue {
    constructor(competitor){
        this.queue = [];
        this.competitor = competitor || ((a,b) => a.priority < b.priority);
    }

    enqueue(value, priority){
        const item = {value, priority}
        let contain = false;
        for(const i in this.queue){
            if(this.competitor(item, this.queue[i])){
                this.queue.splice(i, 0, item);
                contain = true;
                break;
            }
        }
        if(!contain) this.queue.push(item)
        return value;
    }

    front(){
        return this.queue[0]
    }

    rear(){
        return this.queue.slice(-1)
    }

    dequeue(){
        return this.queue.shift()
    }
}


const pq = new PriorityQueue()
pq.enqueue("Sumit", 2); 
pq.enqueue("Gourav", 1); 
pq.enqueue("Piyush", 1); 
pq.enqueue("Sunny", 2); 
pq.enqueue("Sheru", 3); 

console.log(JSON.stringify(pq.queue))

