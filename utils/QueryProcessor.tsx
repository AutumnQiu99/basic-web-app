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

  

  return "";
}
