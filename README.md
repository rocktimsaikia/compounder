# compounder

> A simple compound interest return calculator.

Returns the total compounded value of an investment.

[![CI](https://github.com/rocktimsaikia/compounder/actions/workflows/main.yml/badge.svg)](https://github.com/rocktimsaikia/compounder/actions/workflows/main.yml) [![npm](https://img.shields.io/npm/v/compounder?color=bright)](https://npmjs.com/package/compounder)

## Installtion

```sh
npm i compounder
```

## Usage

```javascript
import compounder from 'compounder';

let totalValue = compounder({
    principal: 25000,
    interestRate: 12,
    compoundFrequency: "annually",
    years: 10,
});

console.log(totalValue);
// => 77646
```

## API

### compounder(parameters)

Returns the total compounded value of an investment.

#### Parameters (`object`):

##### • "principal"
> Type: `number` \
The principal amount of the investment.

##### • "interestRate"

> Type: `number` \
The rate of interest.

##### • "years"

> Type: `number` \
The number of years the investment is held for.

##### • "compoundFrequency" (optional)

> Type: `quarterly` | `semi-annually` | `annually` | `number` \
Default: `annually`
>
> The frequency of compounding interest. By default, it is annually. \
If a number is provided, it will be treated as the number of times the interest is compounded in a year.

##### • "shouldRound" (optional)

> Type: `boolean` \
Default: `true`
>
> Whether to round the result to the nearest whole number.



