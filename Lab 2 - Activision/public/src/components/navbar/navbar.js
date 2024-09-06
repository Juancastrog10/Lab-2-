class Navbar extends HTMLElement {

    static get observedAttributes(){
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', './src/components/navbar/navbar.css');

        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <nav class="navbar">
                <img src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png" alt="Activision Logo">
                <ul>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">JOB</a></li>
                    <li><a href="#">MEDIUM</a></li>
                </ul>
                <div class="auth-buttons">
                    <button class="register-btn">REGISTER</button>
                    <button>LOGIN</button>
                </div>
            </nav>
        `;

        // Attach the external stylesheet and HTML to the shadow DOM
        this.shadowRoot.appendChild(linkElem);
        this.shadowRoot.appendChild(wrapper);
    }
}
customElements.define('navbar-component', Navbar);
export default Navbar;
