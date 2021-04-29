
import React from 'react';
import Footer from './Footer';
// import ReactDOM, { render } from 'react-dom';

function MyApp() {
    return (
        <div>
             <form>
            HP:  <input type="checkbox" value="1"></input><br></br>
            UK: <input type="checkbox" value="2"></input><br></br>
            J&K: <input type="checkbox" value="3"></input><br></br>
        </form>

        <main>
            <p>This is main content</p>
        </main>

        <Footer />
        </div>
        
    )
}



export default MyApp