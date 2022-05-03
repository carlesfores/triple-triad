import './App.css';
import { Board } from './components/Board';

function App() {
    return(
        <div className='content'>
            <header>
                <h1>Triple triad</h1>
            </header>
            <section>
                <div className='game'>

                    <div className='game__player'>
                        - Player 1
                    </div>
                    
                    <Board />
                    
                    <div className='game__player'>
                        - Player 2
                    </div>
                    
                </div>
            </section>
            <footer>

            </footer>
        </div>
    );
}

export default App;
