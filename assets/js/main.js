import Stack from "./Stack.js"
import StackPreviewConfig from "./StackPreviewConfig.js";
import StackPreview from "./StackPreviewManager.js";


const defaultWebsites = [
    "https://replit.com/",
    "https://www.netlify.com/",
    "https://pages.github.com/",
    "https://practical.is-a.dev",
    "https://youtube.com",
]


const stackA = new Stack();
const stackB = new Stack(defaultWebsites.reverse());

const searchbarElement = document.querySelector("#searchBar");
const stackAElement = document.querySelector("#stackA");
const stackBElement = document.querySelector("#stackB");
const backwardElement = document.querySelector("#backward");
const forwardElement = document.querySelector("#forward");
const resetElement = document.querySelector("#reset");
const webpageElement = document.querySelector("#webpage");


const stackPreviewConfig = StackPreviewConfig;

stackPreviewConfig.searchbarElement = searchbarElement;
stackPreviewConfig.stackAElement = stackAElement;
stackPreviewConfig.stackBElement = stackBElement;
stackPreviewConfig.backwardElement = backwardElement;
stackPreviewConfig.forwardElement = forwardElement;
stackPreviewConfig.resetElement = resetElement;
stackPreviewConfig.webpageElement = webpageElement;

const stackPreview = new StackPreview(stackPreviewConfig);


forwardElement.addEventListener("click", (event) => {
    const website = stackA.pop();
    stackB.push(website);
    stackPreview.updateStackView(stackA, stackB)

} )

backwardElement.addEventListener("click", (event) => {
    const website = stackB.pop()
    stackA.push(website)
    stackPreview.updateStackView(stackA, stackB)
} )


resetElement.addEventListener("click", (event) => {
    stackPreview.updateStackView(stackA, stackB)
} )


window.addEventListener("DOMContentLoaded", () => {
    const website = stackB.pop();
    stackA.push(website)
    stackPreview.updateStackView(stackA, stackB)
})