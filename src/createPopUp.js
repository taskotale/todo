
const popUp = (content) => {
    const popUpWindow = document.createElement('div')
    popUpWindow.classList.add('popUp-window')
    popUpWindow.id = 'popUp-window'

    const popUpContent = document.createElement('div')
    popUpContent.id = 'popUp-content'
    popUpContent.classList.add('popUp-content-container')

    popUpContent.appendChild(content)
    popUpWindow.appendChild(popUpContent)
    document.body.appendChild(popUpWindow)


    popUpWindow.addEventListener('click', (e) => {
        if (!popUpContent.contains(e.target)) {
            document.body.removeChild(popUpWindow)
        }
    })

    return popUpWindow
}


export default popUp