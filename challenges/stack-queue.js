/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */
function Stack() {
    const stack = [];
    push = (value) => stack.append(value);
    pop = () => {
        lastIndex = stack.length - 1;
        return stack.slice(0, lastIndex);
    }
    return stack
}
const thisStack = new Stack();
thisStack.push(50);
console.log(thisStack);
thisStack.push(48);
console.log(thisStack)
thisStack.pop();
console.log(thisStack);

function Queue() {
    const stack1 = new Stack();
    const stack2 = new Stack();
    enqueue = (value) => { 
        stack1.append(value);
    }
    dequeue = () => {
        if(stack1.length>0) stack1.slice(1);
    }
    return stack1
}

const newQueue = new Queue();
console.log(newQueue);
newQueue.enqueue(5);
console.log(newQueue);


module.exports = { Stack, Queue };
