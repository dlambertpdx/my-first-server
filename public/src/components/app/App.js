import Component from './Component.js';
import Header from './Header.js';
import PokeList from '../pokedex/PokeList.js';
// import { getPoke } from '../../services/pokedex-api.js';
// import hashStorage from '../../services/hash-storage';

class App extends Component {

    onRender(dom){
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=24';
        let pokeList;
        let pokeListDOM;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                pokeList = new PokeList({ pokemon: data });
                pokeListDOM = pokeList.renderDOM();
                const pokeDex = dom.querySelector('.list-section');
                pokeDex.appendChild(pokeListDOM);
            });

        // const pokeList = new PokeList({ pokemon: [] });

        // function loadPoke() {
        //     const options = hashStorage.get();
        //     getPoke(options)
        //         .then(data => {
        //             const pokemon = data.results;
        //             const totalCount = data.count;
        //             pokeList.update({ pokemon: data });


                    
        //         });
        // }
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