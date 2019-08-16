import Component from '../app/Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {

    onRender(dom) {
        const pokemon = this.props.pokemon;

        pokemon.results.forEach(item => {
            const props = { pokemon: item };
            const pokeItem = new PokeItem(props);
            const pokeItemDOM = pokeItem.renderDOM();
            dom.appendChild(pokeItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="poke"></ul>
        `;
    }
}

export default PokeList;