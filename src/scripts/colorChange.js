function swapStyles(newCss, cssUrl) {

    var oldlink = document.getElementsByTagName("link").item(cssUrl);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", newCss);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}