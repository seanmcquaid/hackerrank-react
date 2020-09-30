# React: Cyclic Counter

## Environment 

- React Version: 16.13.1
- Node Version: ^12.18.3
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/gYOOlf-S6YsXje-lP3bYjQ/cyclic-counter.gif)

## Functionality Requirements

- The component receives a prop cycle, defining the counting cycle.
- The component should render a `<button>` element displaying the text content corresponding to the current count.
- Initially, count is always 0.
- On button click, the count value is incremented by one, and if it reaches the value cycle, it is reset to 0 instead.
- In other words, if the text content of `<button>` before the click was integer k, then it is updated to k + 1, unless k + 1 = cycle, in which case it is reset to 0 instead.

## Testing Requirements

- Button rendering current count should have the data-test-id attribute 'cycle-counter'.

## Project Specifications

**Read Only Files**
- src/App.test.js

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```