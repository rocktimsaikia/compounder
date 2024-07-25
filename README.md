# compounder

A simple compound interest return calculator.

[![CI](https://github.com/rocktimsaikia/compounder/actions/workflows/main.yml/badge.svg)](https://github.com/rocktimsaikia/compounder/actions/workflows/main.yml) | [![npm](https://img.shields.io/npm/v/compounder?color=bright)](https://npmjs.com/package/compounder)

## Installtion

```sh
pnpm add compounder
```

## Usage

```javascript
import compounder from 'compounder';

let totalValue = compounder({
    principal: 25000,
    annualInterestRate: 12,
    compoundFrequency: "annually",
    years: 10,
});

console.log(totalValue);
// => 77646
```
