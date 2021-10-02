function prime(data) {
  let isPrime = true;
  if (data !== 2) {
    for (let i = 2; i ** 2 <= data; i++) {
      if (data % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return "Yes";
    } else {
      return "No";
    }
  }
  if (data === 2) {
    return "Yes";
  }
}

module.exports = prime;

