

export default class StackPreview {
    constructor(configuration ={}){
        this.searchbarElement = configuration.searchbarElement,
        this.stackAElement = configuration.stackAElement,
        this.stackBElement = configuration.stackBElement,
        this.backwardElement = configuration.backwardElement,
        this.forwardElement = configuration.forwardElement,
        this.resetElement = configuration.resetElement,
        this.webpageElement = configuration.webpageElement
    }

    #checkStackIsVoid(stack) {
        if (stack.isEmpty()) {
            console.log("pila vacía")
            this.webpageElement.innerHTML = null
            return true
        }
        return false;
    }
    
    
    #refreshIframe(stack) {
        const website = stack.peek();
        if (this.#checkStackIsVoid(stack)) {
            this.webpageElement.setAttribute("src", "/errors/stack_full.html")
            return;
        }
    
        this.webpageElement.setAttribute("src", website)
        this.searchbarElement.setAttribute("value", website)
    }
    
    #clearStackView() {
        this.stackAElement.innerHTML = null; 
        this.stackBElement.innerHTML = null; 
    }
    
    
    #createStackViewItem(website) {
        const item = document.createElement("li");
        item.className = "item";
        item.innerText = website;
        return item;
    }
    
    #addElementToStackView(stackHtmlElement, website) {
        if (website == null) {
            return document.createElement("li");
        }
        const item = this.#createStackViewItem(website);
        stackHtmlElement.appendChild(item);
        return item;
    };
    
    #addStackViewElements(stack, stackHtmlElement) {
        const stackPreview = stack.clone();
        var lastElement = stackPreview.pop()
        
        const htmlElement = this.#addElementToStackView(stackHtmlElement, lastElement);
        htmlElement.className = "item item--current";
    
        while (!stackPreview.isEmpty()) {
            const website = stackPreview.pop();
            this.#addElementToStackView(stackHtmlElement, website)
        }
    };
    
    updateStackView(stackA, stackB) {
        this.#refreshIframe(stackA);
        console.log(this.stackAElement)
        this.#clearStackView()
        
       this.#addStackViewElements(stackA, this.stackAElement)
       this.#addStackViewElements(stackB, this.stackBElement)
    }
}