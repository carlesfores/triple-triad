import './App.css';

function App() {
    return(
        <div className='content'>
            <header>
                <h1>Triple triad</h1>
            </header>
            <section>
                <h2> Board </h2>
                <div className='game'>
                    <div className='game__player'>
                        - Player 1
                    </div>
                    <div className='game__board'>
                        - Board
                    </div>
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
