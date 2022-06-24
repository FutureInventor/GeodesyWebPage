document.getElementById("menu").style.color="#E55829"

function isInViewport(element, index) {
    const rect = element.getBoundingClientRect()
    return {
        top: Math.abs(rect.top),
        index
    }
}

document.addEventListener("scroll", () => {
    const segmentsId = ["start", "information", "services", "contact"]
    const menuId = ["menu", "about", "offer", "call"]

    const arrTops = segmentsId.map((id, index) => isInViewport(document.getElementById(id), index))

    const smallesTop = arrTops.reduce(
        (prevElement, currentElement) => {
            return prevElement.top > currentElement.top > 0 ? currentElement : prevElement
        }
    )

    menuId.forEach((id) => document.getElementById(id).style.color = "#F5F5F5")
    document.getElementById(menuId[smallesTop.index]).style.color = "#E55829"
})