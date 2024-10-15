const conversion = (number, from, to) => {
  switch (from) {
    case "Celsius":
      switch (to) {
        case "Fahrenheit":
          return number * (9 / 5) + 32;

        case "Kelvin":
          return number + 273.15;

        default:
          return number;
      }

    case "Fahrenheit":
      switch (to) {
        case "Celsius":
          return ((number - 32) * 5) / 9;

        case "Kelvin":
          return ((number - 32) * 5) / 9 + 273.15;

        default:
          return number;
      }

    case "Kelvin":
      switch (to) {
        case "Celsius":
          return number - 273.15;

        case "Fahrenheit":
          return (number - 273.15) * 1.8 + 32;

        default:
          return number;
      }
  }
};

export default conversion;
