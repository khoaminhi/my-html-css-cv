class Onclick {
    static DOMAIN_ORI = 'khoaminhi.github.io'
    static DOMAIN = 'https://khoaminhi.github.io/my-html-css-cv/'
    static DOMAIN_DEV = ['127.0.0.1:5500']

    static click(path) {

    }

    static redirect(path) {
        const temp = `${Onclick.DOMAIN}${path}`
        window.location.assign(temp)
    }
}

class ServerData {
    static NAVBAR = ''

    static async get(path) {
        return await (await fetch(path)).text()
    }
}

window.onload = (event) => {
    const domainCurrent = window.location.host
    if (domainCurrent !== Onclick.DOMAIN_ORI) Onclick.DOMAIN = `${domainCurrent}/`
    if (Onclick.DOMAIN_DEV.includes(domainCurrent)) Onclick.DOMAIN = `/`

    // set navbar
    const executeAsyncFunc = async function() {
        const navbarHtml = await ServerData.get('/navbar.html')
        document.getElementsByClassName('navbar')[0].insertAdjacentHTML('beforeend', navbarHtml)
    }
    executeAsyncFunc()
}

