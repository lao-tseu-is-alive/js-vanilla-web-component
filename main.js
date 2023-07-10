import './style.css'
import { setupCounter } from './src/basic_javascript_counter.js'
import { MyCounter } from './src/components/counter.js'
document.querySelector('#app').innerHTML = `
  <div xmlns="http://www.w3.org/1999/html">
    <h3>Web Components vs classical javascript</h3>
    <div class="card">
      <button id="counter1" type="button"></button>
    </div>
    <div class="card">
      <button id="counter2" type="button"></button>
    </div>
    <p class="read-the-docs">
      The above buttons are classic html elements with a behaviour attached to it with javascript </br>
      The below buttons are instead reusable
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components">web component</a>
       used as tags in the code. Here the tag is &lt;ci-counter counter="55" &gt;
    </p>
    <div class="card">
      <ci-counter id="wc-counter-01" counter="55"></ci-counter>
    </div>
    <div class="card">
      <ci-counter id="wc-counter-01" counter="0"></ci-counter>
    </div>
  </div>
`
customElements.define('ci-counter', MyCounter);
// classic usage of javascript without the web components
setupCounter(document.querySelector('#counter1'), 33)
setupCounter(document.querySelector('#counter2'), 0)
