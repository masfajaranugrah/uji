import restaurantdb from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const beranda = {
  async render() {
    return `
    <picture>
    <source class="heros"  media="(max-width: 600px)" srcset="heros/hero-images_2.jpg">
    <source class="heros" media="(max-width: 800px)" srcset="heros/hero-images_2.jpg">
    <source class="heros" media="(max-width: 1200px)" srcset="heros/hero-images_2.jpg">
    <img class="heros" src='heros/hero.jpg' 
         alt="heros banner">
   </picture>
      <div id="maincontent" class="content">
        <h2 class="content__heading">Daftar Restaurant</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantdb.beranda();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default beranda;
