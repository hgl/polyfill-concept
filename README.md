# Polyfill Concept

Proof of concept on how a feature detection library and conditional polyfill code could generate efficient and lightweight polyfill code tailored for each browser.

## Usage

- Open `index.html` in your browser to see the tailored polyfill code.
- Open in different browsers to see different polyfills.

## Caveats

This is only a demo. Currently only `Element::classList` is polyfilled, and if a browser misses the whole `classList` implementation, an undefined `DOMTokenListShim` is provided.
