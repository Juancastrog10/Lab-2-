import * as components from './components/indexFather.js';
import { newsCardsData } from './data/newsCardsData/newsCardsData.js';

class Container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('news-cards-container');
    this.shadowRoot.innerHTML = `<have-fun></have-fun>` + `
      <link rel="stylesheet" href="./src/components/newsCards/newsCards.css">
      <navbar-component></navbar-component>
      <banner-component
        img="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/home/modes/MWIII_Landing_Zombie-Ghost.webp"
        alt="Call of Duty Black Ops 6 character"
        logo="https://www.activision.com/content/dam/atvi/activision/home/carousel/MWIII_Logo_Horizontal.png"
        description="Captain Price and task force 141 face the ultimate threat in Call of Duty: Modern Warfare III."
        button00="BUY MWIII"
        button01="VISIT SITE"
      ></banner-component>
    
      <section class="featured-news">
        <news-logos
          text="Latest news and articles"
          img="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg"
          img1="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg"
          img2="https://firebasestorage.googleapis.com/v0/b/narracion-hipermedia.appspot.com/o/imgs%2FJuan%20Pablo%20C%2Fthps-logo%201.png?alt=media&token=80268dd6-5160-41a0-b9c2-8a6bc7fa600f"
          img3="https://firebasestorage.googleapis.com/v0/b/narracion-hipermedia.appspot.com/o/imgs%2FJuan%20Pablo%20C%2Fcrash-bandicoot-logo%201.png?alt=media&token=d921210c-77df-4822-bd9e-8947d68b89a4"
        ></news-logos>
      </section>
    `;
    
    newsCardsData.forEach((e) => {
      const newsCard = document.createElement('news-cards');
      newsCard.setAttribute('image', e.image);
      newsCard.setAttribute('date', e.date);
      newsCard.setAttribute('title', e.title);
      container.appendChild(newsCard);
    });
    
    const featuredNews = this.shadowRoot.querySelector('.featured-news');
    featuredNews.appendChild(container);
    
    container.innerHTML += `
            <div class="button-view-all">
                <div class="button-login">
                    <a href="index.html"> SEE ALL</a>
                </div>
            </div>
    `;
    
    this.shadowRoot.innerHTML += `
            <support-banner
            title="We are here to help!"
            description='Get answers to frequently asked questions, check server status, and contact a support expert.'
            image='https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/support-banner-v3.jpg'>
            </support-banner>

<link rel="stylesheet" href="./src/components/community/community.css">
<section class="shadow-container">     
  <h1 class="h1-community">Community</h1>   
  <div class="shadow-card-container">
    <community-component
      img="https://media.vandal.net/m/82925/call-of-duty-warzone-20203102215835_1.jpg"
      username="@warzoneMobile"
      icon="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
    ></community-component>

    <community-component
      img="https://media.vandal.net/i/1200x900/9-2022/202291917113545_1.jpg"
      username="@toysforbobofficial"
      icon="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
    ></community-component>

    <community-component
      img="https://pbs.twimg.com/media/GWGSAxMXQAAHRc8.jpg"
      username="@callofdutyendowment"
      icon="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
    ></community-component>
  </div>
</section>

<havefun-component
    <div class="have-fun__container__left">
        <h2>HAVE FUN</h2>
        <p>Learn more about job opportunities</p>
            <div class="button-view-all">
                <div class="button-login">
                    <a href="index.html">JOIN US</a>
                </div>
            </div>
    </div>
    <div class="have-fun__container__right">
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
></havefun-component>
  
    `
  }
}

customElements.define('app-container', Container);