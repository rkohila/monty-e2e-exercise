export const gotoPage = () => {
    browser.url('/')
}

export const hasLogo = () => {
    browser.isVisible(".BrandLogo-img")
}

