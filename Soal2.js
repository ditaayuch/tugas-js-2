const greeting = (clock, functionReturnDay, fullName, functionReturnFirstName) => {
    const time = functionReturnDay(clock);
    const firstName = functionReturnFirstName(fullName);
    return `Selamat ${time}, ${firstName}!`;
  };
  
  const returnDay = (clock) => {
    if (clock >= 5 && clock <= 12) {
        return "Pagi";
    } else if (clock >= 13 && clock <= 15) {
        return "Siang";
    } else if (clock >= 16 && clock <= 18) {
        return "Sore";
    } else if ((clock >= 19 && clock <= 24) || (clock >= 0 && clock <= 4)) {
        return "Malam";
    } else {
        return "Waktu tidak valid";
    }
  };
  
  const getFirstName = (fullName) => {
    const names = fullName.split(' ');
    if (names.length > 0) {
      return names[0];
    } else {
      return '';
    }
  };
  
  const clock = 12;
  const fullName = 'Dita Ayu';  
  const salam = greeting(clock, returnDay, fullName, getFirstName);
  console.log(salam);