import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <header>
        <div class="container">
            <div id="brand_logo">
                <h1><span class="highlight table">Hangman</span>, Do Or Die !!</h1>
            </div>
        </div>
      </header>
      <App />
      <footer>
          <kbd>Design by Yash Tambi, Copyright &copy; 2017</kbd>
      </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
