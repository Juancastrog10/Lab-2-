class HaveFun extends HTMLElement {
    static get observedAttributes() {
        return ['h2', 'description', 'teams', 'li00', 'li01', 'li02', 'li03', 'li04', 'li05', 'li06', 'li07', 'li08', 'li09']
    }

    constructor() {
        super()
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./src/components/haveFun/haveFun.css"> 
<section class="havefunbanner">
    <div class="havefunbannercontainer-left">
        <h2>HAVE FUN</h2>
        <p>Learn more about job opportunities</p>
            <div class="button-view-all">
                <div class="button-join">
                    <a href="index.html">JOIN US</a>
                </div>
            </div>
    </div>
    <div class="havefunbanner__container__right">
        <h3>OUR TEAMS</h3>    
        <ul>
            <li>GAME DESIGN</li>
            <li>GRAPHICS AND ANIMATIONS</li>
            <li>BRAND MANAGEMENT</li>
            <li>PRODUCTION</li>
            <li>QUALITY CONTROL</li>
            <li>CUSTOMER SUPPORT</li>
            <li>STUDIO OPERATIONS</li>
            <li>PROGRAMMING</li>
            <li>FINANCE AND ACCOUNTING</li>
            <li>HUMAN RESOURCES</li>
        </ul>
    </div>
</section>
        `
    }
}

customElements.define('havefun-component', HaveFun)
export default HaveFun