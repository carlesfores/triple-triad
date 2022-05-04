import './App.css';
import { Board } from './components/Board/Board';
import { Player } from './components/Player/Player';

function App() {
    return(
        <div className='content'>
            <header>
                <h1>Triple triad</h1>
            </header>
            <section>
                <div className='game'>
                    <Player />
                    <Board />
                    <Player />
                </div>
            </section>
            <footer>

            </footer>
        </div>
    );
}

export default App;
