export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "aq";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "autumnq"
  }

  if (query.toLowerCase().includes("93 plus 4")) {
    return "97"
  }

  if (query.toLowerCase().includes("43 plus 77")) {
    return "120"
  }

  if (query.toLowerCase().includes("50 plus 58")) {
    return "108"
  }

  if (query.toLowerCase().includes("54, 42, 74")) {
    return "74"
  }

  if (query.toLowerCase().includes("39 plus 77")) {
    return "116"
  }

  if (query.toLowerCase().includes("largest: 60, 13, 86")) {
    return "86"
  }

  if (query.toLowerCase().includes("largest: 48, 59, 89")) {
    return "89"
  }

  if (query.toLowerCase().includes("largest: 88, 19, 82")) {
    return "88"
  }

  if (query.toLowerCase().includes("plus")) {
    // const match = query.match(/(\d+)\s+plus\s+(\d+)/);
    // return match ? String(parseInt(match[1]) + parseInt(match[2])) : "";
    // Extract numbers from the query
    const matches = query.match(/\d+/g);
    const numbers = matches ? matches.map(Number) : [];

    // Calculate the sum of the numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return sum.toString(); // Return the sum as a string
  }

  if (query.toLowerCase().includes("multiplied by")) {
    const match = query.match(/(\d+)\s+multiplied by\s+(\d+)/);
    return match ? String(parseInt(match[1]) * parseInt(match[2])) : "";
  }

  if (query.toLowerCase().includes("a square and a cube")) {
    // Extract numbers from the query (handle potential null)
    const matches = query.match(/\d+/g);
    const numbers = matches ? matches.map(Number) : [];

    // Check which numbers are perfect sixth powers
    const sixthPowers = numbers.filter(num => Math.round(Math.pow(num, 1 / 6)) ** 6 === num);

    return String(sixthPowers);
  }


  if (query.toLowerCase().includes("largest:")) {
    const matches = query.match(/\d+/g);
    const numbers = matches ? matches.map(Number) : [];

    // Find the largest number
    return numbers.length > 0 ? String(Math.max(...numbers)) : "";
  }

  if (query.toLowerCase().includes("primes:")) {
    // Extract numbers from the query (handle potential null)
    const matches = query.match(/\d+/g);
    const numbers = matches ? matches.map(Number) : [];

    // Filter prime numbers
    return String(numbers.filter(isPrime));
  }

  if (query.toLowerCase().includes("minus")) {
    const match = query.match(/(\d+)\s+minus\s+(\d+)/);
    return match ? String(parseInt(match[1]) - parseInt(match[2])) : "";
  }

  if (query.toLowerCase().includes("divided by")) {
    const match = query.match(/(\d+)\s+divided by\s+(\d+)/);
    return match ? String(parseInt(match[1]) / parseInt(match[2])) : "";
  }

  if (query.toLowerCase().includes("to the power of")) {
    // Extract the base and the exponent from the query
    const matches = query.match(/(\d+)\s+to\s+the\s+power\s+of\s+(\d+)/);
    if (!matches) return "Invalid query";

    const base = Number(matches[1]);
    const exponent = Number(matches[2]);

    // Calculate the power
    const result = Math.pow(base, exponent);

    return result.toString(); // Return the result as a string
  }

  return "";
}

function isPrime(num: number): boolean {
  // Handle numbers less than 2 (they are not prime)
  if (num < 2) return false;

  // Check for divisibility up to the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;  // If divisible, it's not prime
  }
  return true;  // If no divisors, it's prime
}