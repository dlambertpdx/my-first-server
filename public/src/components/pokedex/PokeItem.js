import Component from '../app/Component.js';

class PokeItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        return /*html*/`
        <li class="poke-item">
            <h3 class="pokemon-name">${pokemon.pokemon}</h3>
            <div class="image-container">
                <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
            </div>
        </li>
        `;
    }
}

export default PokeItem;