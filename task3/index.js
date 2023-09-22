const findElementByClass = (rootElement, targetElement) => {
    if (rootElement.classList.contains(targetElement)) {
        return rootElement
    }

    for (let i = 0; i < rootElement.children.length; i++) {
        const child = rootElement.children[i]
        const resul = findElementByClass(child, targetElement)

        if (resul) {
            return resul
        }
    }
    return null
}


const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'title');
console.log(targetElement);