// Skapa ett program som frågar efter användarens namn med prompt och sedan hälsar på dem i konsolen.
function greetUser() {
  let usersName;

  usersName = prompt("What is your name?");

  console.log("Hello, " + usersName + "!");
}

// Be användaren mata in två ord och skriv ut vilket som kommer först i alfabetet.
function compareWords() {
  let words = [];

  words[0] = prompt("Enter a word:");
  words[1] = prompt("Enter a second word:");

  words.sort();

  console.log(words[0]);
}

// Fråga användaren om deras ålder och skriv i konsolen om de är över eller under 18.
function adultCheck() {
  let age, outputLine;

  age = prompt("How old are you?");

  if (age > 18) {
    outputLine = "You are over 18 and considered an adult.";
  } else {
    outputLine = "You are under 18 and not considered an adult.";
  }

  console.log(outputLine);
}

// Låt användaren gissa vilket djur du tänker på (t.ex. "katt"). Om de gissar rätt, visa ett meddelande om att de har rätt.
function guessAnimal() {
  const animals = ["Dog", "Cat", "Horse", "Cow", "Pig"];
  const randomIndex = Math.floor(Math.random() * animals.length);
  const randomEntry = animals[randomIndex];

  const userGuess = prompt("Which animal am I thinking of?");

  if (userGuess === randomEntry) {
    console.log("You guessed correctly.");
  } else {
    console.log("You guessed incorrectly.");
  }
}

// Skapa ett program som frågar användaren efter deras favoritfärg och om den är "röd", "blå" eller "grön", ge en speciell kommentar för varje färg.
function recognizeColor() {
  const favoriteColor = prompt("What is your favorite color?");

  if (favoriteColor === "Red") {
    alert("Red is often associated with passion, energy, and intensity.");
  } else if (favoriteColor === "Blue") {
    alert(
      "Blue often evokes feelings of calmness and serenity, reminiscent of the sky and ocean."
    );
  } else if (favoriteColor === "Green") {
    alert("Green is the color of nature, symbolizing growth and renewal.");
  }
}

// Låt användaren mata in sitt provresultat (0-100) och skriv ut om de är godkända (minst 50 poäng) eller inte.
function passedOrNot() {
  const testResult = prompt(
    "What is your test result?\nTo pass you have to have above 50 points."
  );

  if (testResult > 50) {
    alert("You have passed the test.");
  } else {
    alert("You have not passed the test.");
  }
}

// Skapa ett program som frågar användaren om vädret är soligt, regnigt eller molnigt och ger ett förslag på aktivitet beroende på svaret.
function todoToday() {
  const currentWeather = prompt("Is the weather sunny, rainy or cloudy?");

  if (currentWeather === "Sunny") {
    alert("Go for a picnic in the park.");
  } else if (currentWeather === "Rainy") {
    alert("Indoor board games or a cozy movie marathon.");
  } else if (currentWeather === "Cloudy") {
    alert("Visit a museum or art gallery.");
  }
}

// Skapa ett program som frågar användaren vilket språk de talar och svarar på olika sätt beroende på om de talar svenska, engelska eller något annat språk.
function whichUserLanguage() {
  const usrLang = prompt("What language do you speak?");

  switch (usrLang) {
    case "Swedish":
      alert("Vad kul att du talar svenska!");
      break;
    case "English":
      alert("Oh, so you speak English!");
      break;
    default:
      alert("Sadly I do not know that language!");
      break;
  }
}

// Skapa ett program som frågar användaren efter ett tal och kollar om talet är en multipel av 5.
function multipleOf5() {
  const usrNum = prompt("Enter a number:");

  if (usrNum % 5 === 0) {
    alert(usrNum + " is a multiple of 5.");
  } else {
    alert(usrNum + " is not a multiple of 5.");
  }
}

// Använd confirm för att fråga användaren om de vill gå ut och skriv ut ett meddelande beroende på svaret.
function wantToGoOut() {
  let confirmGoOut;

  if (confirm("Confirm that you want to go out.") === true) {
    confirmGoOut = "Okay, let us go out!";
  } else {
    confirmGoOut = "Okay, we will not go out!";
  }

  alert(confirmGoOut);
}

// Låt användaren skriva in ett tecken. Kolla om det är en siffra eller en bokstav och skriv ut resultatet.
function numberOrLetter() {
  const userInput = prompt("Enter a character:");

  if (/^[a-zA-Z]$/.test(userInput)) {
    alert("Your input is a letter.");
  } else if (/^[0-9]$/.test(userInput)) {
    alert("Your input is a number.");
  }
}

// Fråga användaren om tre olika ord och skriv ut vilket som är längst.
function biggestOf3Words() {
  let userInput = [];

  userInput[0] = prompt("Enter a word:");
  userInput[1] = prompt("Enter a second word:");
  userInput[2] = prompt("Enter a third word:");

  const longestWord = userInput.reduce((a, b) =>
    a.length >= b.length ? a : b
  );

  alert("The longest word from your three words is: " + longestWord);
}

// Skapa ett program som frågar efter ett lösenord och skriver ut om lösenordet är tillräckligt långt (minst 8 tecken) och innehåller minst en siffra.
function passwordCheck() {
  const userInput = prompt("Enter a password:");

  if (userInput.length >= 8 && /\d/.test(userInput)) {
    alert("Your password is: " + userInput);
  } else {
    alert(
      "Your password is not at least eight characters long, and has to include at least one number."
    );
  }
}

// Skapa ett program där användaren matar in sin ålder och baserat på det, skriv ut vilken ålderskategori de tillhör: barn (0-12), tonåring (13-19), vuxen (20-64), eller pensionär (65+).
function ageCategory() {
  const userAge = prompt("What is your age?");

  switch (true) {
    case userAge > 0 && userAge <= 12:
      alert("You are a child.");
      break;
    case userAge >= 13 && userAge <= 19:
      alert("You are a teenager.");
      break;
    case userAge >= 20 && userAge <= 64:
      alert("You are an adult.");
      break;
    case userAge >= 65:
      alert("You are a pensioner.");
      break;
    // Not needed
    /*         default:
            break; */
  }
}

// Skapa ett program där användaren får två alternativ (med confirm för båda alternativen), och beroende på deras val, skriv ut ett specifikt resultat.
function decisionMaking() {
  if (confirm("Hello! Want to grab a cup of coffee?") === true) {
    if (
      confirm(
        "Okay, great! Let us go out for a coffee then.\nRight now or later?"
      ) === true
    ) {
      alert("Okay, see you soon!");
    } else {
      alert("Okay, see you later!");
    }
  } else {
    if (confirm("Okay, too bad! What about a cup of tea instead?") === true) {
      if (
        confirm(
          "Okay, great! Let us go out for a cup of tea then.\nRight now or later?"
        ) === true
      ) {
        alert("Okay, see you soon!");
      } else {
        alert("Okay, see you later!");
      }
    } else {
      alert("Alright! Let us try to get together another time instead.");
    }
  }
}
