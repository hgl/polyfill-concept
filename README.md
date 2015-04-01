# Polyfill Concept

Proof of concept on how a feature detection library and conditional polyfill code could generate efficient and lightweight polyfill code tailored for each browser.

## Usage

- Open `index.html` in your browser to see the tailored polyfill code.
- Open in different browsers to see different polyfills. (e.g., at the time of writing, chrome contains a broken `Element::classList.toggle` method, so its polyfilled. Firefox does it correctly, so no polyfill.)

## Caveats

This is only a demo. Currently only `Element::classList` is polyfilled, and if a browser misses the whole `classList` implementation, an undefined `DOMTokenListShim` is provided.
