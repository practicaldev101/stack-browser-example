export default class Stack {
      
    constructor(initialStack = []){
        this.elements = [...initialStack];
        this.top = initialStack.length - 1;
    }

    push(element) {
        if (element == null) {
            return;
        }
        this.elements[++this.top] = element;
        return element;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack vacío")
            return null;
        }
        const element = this.elements[this.top];
        this.elements[this.top--] = null;
        this.#flushGarbage();
        return element;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack vacío")
            return null;
        }

        return this.elements[this.top];
    }

    isEmpty() {
        return this.top < 0;
    }

    #flushGarbage() {
        this.elements = this.elements.filter((element) => element !== null);
    }

    clone() {
        return new Stack(this.elements);
    }
}