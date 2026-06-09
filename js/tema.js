function trocarTema() {

    const paginaAtual = window.location.pathname;

    if (paginaAtual.includes("HtmlBlack")) {

        localStorage.setItem("tema", "light");

        window.location.href = paginaAtual
            .replace("HtmlBlack", "HtmlLight")
            .replace(".html", "Light.html");

    } else {

        localStorage.setItem("tema", "dark");

        window.location.href = paginaAtual
            .replace("HtmlLight", "HtmlBlack")
            .replace("Light.html", ".html");

    }
}