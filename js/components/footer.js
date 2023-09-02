class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
        <div class="footer-flex">
            <div class="footer-branding">
                <img src="assets/images/common/png/logo-no-background.png" alt="">

            </div>
            <nav class="footer_nav">
                <ul class="nav_list">
                    <li class="nav_item"><a href="#">About</a></li>
                    <li class="nav_item"><a href="#">Features</a></li>
                    <li class="nav_item"><a href="#">Contact</a></li>
                    <li class="nav_item"><a href="#">Help</a></li>
                </ul>
            </nav>
        </div>

        <div class="footer-copyright">
            <div class="footer-socmed">
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
            <span>&copy; 2023 by a very sleepy dude</span>
        </div>
    </footer>
        `;
    }
}

customElements.define("footer-component", Footer);