# caterpillar

## Install Mocha

```
npm install mocha --save
```

## Install Chai

```
npm install chai --save
```

## How to test

```javascript
const mocha = require('mocha')
const expect = require('chai').expect
const cater = require('../lib/cater')

describe("TEST TEXT", () => {
    it("CONDITION TEXT", () => {
        expect(<CONDITION>).equal(<VALUE>)
    })
})
```