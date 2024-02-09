function trailingZeros(n) {
  //your JS code here. If required.
	n = Number(n)
	if (n < 0) {
		// n is negative
		return -1;
	}

	let count = 0;
	for (let i = 5; Math.floor(n/i) >= 1; i = i*5) {
		count += Math.floor(n/i)
	}
	return count
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
