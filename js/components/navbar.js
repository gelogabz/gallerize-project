class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <nav class="main_nav">
    <h1 class="nav_logo"><a href="#"><img src="assets/images/common/png/logo-no-background.png" alt=""></a></h1>
    <ul class="nav_list">
        <li class="nav_item"><a href="#">About</a></li>
        <li class="nav_item"><a href="#">Features</a></li>
        <li class="nav_item"><a href="#">Contact</a></li>
        <li class="nav_item"><a href="#">Help</a></li>
    </ul>
</nav>
        `;
    }
}

customElements.define("navbar-component", Navbar);