type CompoundFrequency = "quarterly" | "semi-annually" | "annually" | number;

interface ICompoundInterest {
	principal: number;
	annualInterestRate: number;
	compoundFrequency?: CompoundFrequency;
	years: number;
	shouldRound?: boolean;
}

const compoundFrequencyMap = {
	quarterly: 4,
	"semi-annually": 2,
	annually: 1,
};

function calcCompoundInterestReturn({
	principal,
	annualInterestRate,
	years,
	compoundFrequency = "annually",
	shouldRound = false,
}: ICompoundInterest) {
	// Convert the compound frequency to an integer
	// unless the given value is already a number.
	let compoundFrequencyInt: number;
	if (typeof compoundFrequency === "number") {
		compoundFrequencyInt = compoundFrequency;
	} else {
		compoundFrequencyInt = compoundFrequencyMap[compoundFrequency];
	}

	// Calculate the total compound interest return
	const interestRate = annualInterestRate / 100;
	const totalReturn =
		principal *
		(1 + interestRate / compoundFrequencyInt) ** (compoundFrequencyInt * years);

	// Round the total value to the nearest whole number
	if (shouldRound) {
		return Math.round(totalReturn);
	}

	return totalReturn;
}

export default calcCompoundInterestReturn;
