function calculateMoney(ticketSale) {
  if (ticketSale >= 0) {
    income = 120 * ticketSale;
    outcome = 500 + 8 * 50;
    return income - outcome;
  }
  return "Invalid Number";
}

function checkName(name) {
  const badName = ["A", "y", "i", "e", "o", "u", "w"];

  const lastValue = name.length - 1;
  if (typeof name == "string") {
    const fixName = name.toLowerCase();
    for (const i of badName) {
      if (fixName[lastValue] === i) {
        return "Good Name";
      }
    }
    return "Bad Name";
  }
  return "Invalid";
}

function deleteInvalids(array) {
  if (Array.isArray(array)) {
    let newArr = [];
    for (const i of array) {
      if (typeof i === "number" && Number.isInteger(i)) {
        newArr.push(i);
      }
    }
    return newArr;
  } else {
    return "Invalid Array";
  }
}

function password(obj) {
  const long = temp.birthYear.toString().length;
  if (Object.entries(temp).length === 3 && long === 4) {
    let nam = temp.siteName[0].toUpperCase() + temp.siteName.slice(1);
    return nam + "#" + temp.name + "@" + temp.birthYear;
  } else {
    return "Invalid";
  }
}
let temp = { name: "kolimuddin", birthYear: 1999, siteName: "google" };

function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) && Number.isInteger(livingCost)) {
    let total = 0;
    for (const i of arr) {
      if (i >= 3000) {
        let tax = (i * 20) / 100;
        total = total - tax;
      }
      total += i;
    }
    let savings = total - livingCost;
    if (savings >= 0) {
      return savings;
    } else {
      return "Earn More";
    }
  } else {
    return "Invalid Input";
  }
}
