function customRender(reactElement, mainContainer){

    const element = document.createElement(reactElement.type)

    element.textContent = reactElement.children
    
    for (const prop in reactElement.attributes) {
        if (prop === 'children') continue
        element.setAttribute(prop, reactElement.attributes[prop])
    }

    mainContainer.appendChild(element)

}

const reactElement  = {
    type: "a",
    attributes: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click to visit Google"
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)