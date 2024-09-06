class Banner extends HTMLElement {

    static get observedAttributes(){
        return ['img', 'alt', 'logo', 'description', 'button00', 'button01'];
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
            this[propName] = newValue;
        }
    }
    render(){
        this.shadowRoot.innerHTML = `
<link rel="stylesheet" href="./src/components/banner/banner.css">
<section>
    <div class='banner-img'>
        <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/home/modes/MWIII_Landing_Zombie-Ghost.webp" alt="${this.alt}" />
        <div class='logo-container'>
            <div class='logo-img'>
                <img src="${this.logo}" alt="${this.alt}" />
                <p>${this.description}</p>
            </div>
            <div class="button">
                <div class="button-reserve">
                    <a href="index.html">${this.button00}</a>
                </div>
                <div class="button-visit">
                    <a href="index.html">${this.button01}</a>
                </div>
            </div>
        </div>
    </div>
</section>
        `;
    }
}
customElements.define('banner-component', Banner);
export default Banner;