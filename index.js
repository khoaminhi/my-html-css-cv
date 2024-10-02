/**
 * code in navbar.html and paste into this here
 */
const NAVBAR_HTML = `
<div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active href onlick" aria-current="page" onclick="Onclick.redirect('index.html')">CV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link onlick" onclick="Onclick.redirect('cv-pdf/Resume-Khoa-MinHi-Dev.docx')">CV Template</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Documents
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item href onlick" onclick="Onclick.redirect('frontend')">Frontend</a></li>
                        <li><a class="dropdown-item href" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item href onlick" onclick="Onclick.redirect('tips')">Tips</a></li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</div>
`

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
    document.getElementsByClassName('navbar')[0].insertAdjacentHTML('beforeend', NAVBAR_HTML)
}

