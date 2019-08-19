import Component from './Component.js';
import Header from './Header.js';
import PokeList from '../pokedex/PokeList.js';
import { getPoke } from '../../services/pokedex-api.js';
import hashStorage from '../../services/hash-storage.js';
import Search from '../options/Search.js';
import Paging from '../options/Paging.js';

class App extends Component {

    onRender(dom){
        const header = new Header();
        dom.prepend(header.renderDOM());

        const optionsSection = dom.querySelector('.options-section');
        const search = new Search();
        optionsSection.appendChild(search.renderDOM());

        const listSection = dom.querySelector('.list-section');

        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokemon: [] });
        listSection.appendChild(pokeList.renderDOM());

        function loadPoke() {
            const options = hashStorage.get();
            getPoke(options)
                .then(data => {
                    const pokemon = data.results;
                    const totalCount = data.count;

                    pokeList.update({ pokemon: pokemon });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }
        loadPoke();

        window.addEventListener('hashchange', () => {
            loadPoke();
        });
    }
    
    renderHTML() {
        return /*html*/`
        <div>
        <!-- header goes here -->
        
        <main>
            <section class="options-section">
                <!-- filter goes here -->        
            </section>
                
            <section class="list-section">
                <!-- cat list goes here -->        
            </section>
        </main>
    </div> 
        `;
    }
}

export default App;