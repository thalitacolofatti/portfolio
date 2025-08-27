class MenuList extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ul class="cabecalho__menu__lista">
                <li><a class="cabecalho__menu__link" href="index.html">Home</a></li>
                <li><a class="cabecalho__menu__link" href="about.html">Sobre</a></li>
                <li><a class="cabecalho__menu__link" href="archviz.html">Archviz</a></li>
                <li><a class="cabecalho__menu__link" href="games.html">Games</a></li>
                <li><a class="cabecalho__menu__link" href="web.html">Web</a></li>
                <li><a class="cabecalho__menu__link" href="design.html">Design</a></li>
            </ul>
        `;
    }
}

customElements.define("menu-list", MenuList);