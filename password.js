function generatePassword(firstName, middleName, lastName) {
    
    const firstTwoChars = firstName.substring(0, 2);
    const middleTwoChars = middleName.substring(0, 2);
    const lastTwoChars = lastName.substring(0, 2);

    
    const randomNum = Math.floor(100 + Math.random() * 900);

       const password = `${firstTwoChars}${middleTwoChars}${lastTwoChars}${randomNum}`;

    return password;
}