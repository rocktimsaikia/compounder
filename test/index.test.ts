import { expect, test } from "vitest";
import compounder from "../src/index";

test("Should return amount with all decimal values", () => {
  let result = compounder({
    principal: 1000,
    annualInterestRate: 5,
    years: 10,
  });
  expect(result).toBe(1628.8946267774422)
});

test("Should return rounded amount to the nearest whole number", () => {
	let result = compounder({
		principal: 1000,
		annualInterestRate: 5,
		years: 10,
		shouldRound: true,
	});
	expect(result).toBe(1629)

	result = compounder({
		principal: 25000,
		annualInterestRate: 12,
		years: 10,
		shouldRound: true,
	});
	expect(result).toBe(77646)
});

test("Should return amount with compounding frequency", () => {
	let result = compounder({
		principal: 1000,
		annualInterestRate: 5,
		compoundingFrequency: 2,
		years: 10,
	});
	expect(result).toBe(1638.6164402903942)
});

