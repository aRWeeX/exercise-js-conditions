// Lätta

/*
1. Hälsa användaren
Skapa ett program som frågar efter användarens namn med prompt och sedan hälsar på dem i konsolen.
*/
function greetUser() {
  const userName = prompt("What is your name?");

  console.log("Hello, " + userName + "!");
}

/*
2. Jämför två ord
Be användaren mata in två ord och skriv ut vilket som kommer först i alfabetet.
*/
function compareWords() {
  const word1 = "Enter a word:";
  const word2 = "Enter a second word:";

  if (word1 < word2) {
    console.log(word1 + " comes before " + word2);
  } else if (word1 > word2) {
    console.log(word2 + " comes before " + word1);
  }
}

/*
3. Är användaren vuxen?
Fråga användaren om deras ålder och skriv i konsolen om de är över eller under 18.
*/
function adultCheck() {
  const age = prompt("How old are you?");

  if (age > 18) {
    console.log("You are over 18 and thereby considered an adult.");
  } else {
    console.log("You are under 18 and thereby considered a minor.");
  }
}

/*
4. Gissa ett djur
Låt användaren gissa vilket djur du tänker på (t.ex. "katt"). Om de gissar rätt, visa ett meddelande om att de har rätt.
*/
function guessAnimal() {
  const animal = "lion";
  const guess = prompt("Which animal am I thinking of?");

  if (guess !== animal) {
    console.log("Your guess is wrong.");
  } else {
    console.log("You guessed right!");
  }
}

// Medelsvåra

/*
5. Känn igen en färg
Skapa ett program som frågar användaren efter deras favoritfärg och om den är "röd", "blå" eller "grön", ge en speciell kommentar för varje färg.
*/
function recognizeColor() {
  const favoriteColor = prompt("What is your favorite color?");

  if (favoriteColor === "red") {
    console.log(
      "The color red is often associated with passion, love, danger, energy, and power."
    );
  } else if (favoriteColor === "blue") {
    console.log(
      "The color blue is often associated with calmness, trust, stability, and serenity. It is also linked to the sky and the ocean."
    );
  } else if (favoriteColor === "green") {
    console.log(
      "The color green is often associated with nature, growth, renewal, health, and tranquility. It can also symbolize money, luck, and environmental awareness."
    );
  }
}

/*
6. Godkänd eller inte
Låt användaren mata in sitt provresultat (0-100) och skriv ut om de är godkända (minst 50 poäng) eller inte.
*/
function passedOrNot() {
  const testResult = prompt("What is your test result? (0-100)");

  if (testResult >= 50) {
    console.log("You have passed the test.");
  } else {
    console.log("You did not pass the test.");
  }
}

/*
7. Vad ska vi göra idag?
Skapa ett program som frågar användaren om vädret är soligt, regnigt eller molnigt och ger ett förslag på aktivitet beroende på svaret.
*/
function toDoToday() {
  const weather = prompt("How is the weather? Is it sunny, rainy or cloudy?");

  if (weather === "sunny") {
    console.log(
      "Enjoy outdoor activities like having a picnic, going for a walk, or visiting a park."
    );
  } else if (weather === "rainy") {
    console.log(
      "Cozy up with a good book or movie, enjoy a warm drink, and listen to the soothing sound of the rain."
    );
  } else if (weather === "cloudy") {
    console.log(
      "Enjoy a cozy day indoors with a good book or movie, or take a leisurely walk to appreciate the calm atmosphere."
    );
  }
}

/*
8. Vilket språk talar du?
Skapa ett program som frågar användaren vilket språk de talar och svarar på olika sätt beroende på om de talar svenska, engelska eller något annat språk.
*/
function whichLanguageUser() {
  const language = prompt("What language do you speak?");

  if (language === "Swedish") {
    console.log("Vad kul att du talar svenska!");
  } else if (language === "English") {
    console.log("Oh, so you speak English!");
  } else {
    console.log("Sadly I do not know " + language + "!");
  }
}

/*
9. Multipel av 5?
Skapa ett program som frågar användaren efter ett tal och kollar om talet är en multipel av 5.
*/
function multipleOf5() {
  const number = prompt("Enter a number:");

  if (number % 5 === 0) {
    console.log(number + " is a multiple of 5.");
  } else {
    console.log(number + " is not a multiple of 5.");
  }
}

/*
10. Ska vi gå ut?
Använd confirm för att fråga användaren om de vill gå ut och skriv ut ett meddelande beroende på svaret.
*/
function goOut() {
  const answer = confirm("Do you want to go out?");

  if (answer === true) {
    console.log("Okay, let us go out!");
  } else {
    console.log("Okay, we will not go out!");
  }
}

// Svåra

/*
11. Siffra eller bokstav?
Låt användaren skriva in ett tecken. Kolla om det är en siffra eller en bokstav och skriv ut resultatet.
*/
function numberOrLetter() {
  const char = prompt("Enter a character:");

  if (!isNaN(parseInt(char))) {
    console.log("You have entered a number.");
  } else if (char.toLowerCase() !== char.toUpperCase()) {
    console.log("You have entered a letter.");
  }
}

/*
12. Största av tre ord
Fråga användaren om tre olika ord och skriv ut vilket som är längst.
*/
function biggestOf3Words() {
  const word1 = prompt("Enter a word:");
  const word2 = prompt("Enter a second word:");
  const word3 = prompt("Enter a third word:");

  if (word1.length >= word2.length && word1.length >= word3.length) {
    console.log(word1 + " is the longest of your 3 words.");
  } else if (word2.length >= word1.length && word2.length >= word3.length) {
    console.log(word2 + " is the longest of your 3 words.");
  } else {
    console.log(word3 + " is the longest of your 3 words.");
  }
}

/*
13. Lösenordskontroll
Skapa ett program som frågar efter ett lösenord och skriver ut om lösenordet är tillräckligt långt (minst 8 tecken) och innehåller minst en siffra.
*/
function passwordCheck() {
  const password = prompt("Enter a password:");
  const hasNumber = password
    .split("")
    .some((char) => !isNaN(char) && char !== "");

  if (password.length >= 8 && hasNumber === true) {
    console.log("Your password meets the requirements!");
  } else {
    console.log("Your password does not meet the requirements!");
  }
}

/*
14. Ålderskategori
Skapa ett program där användaren matar in sin ålder och baserat på det, skriv ut vilken ålderskategori de tillhör: barn (0-12), tonåring (13-19), vuxen (20-64), eller pensionär (65+).
*/
function ageCategory() {
  const age = prompt("Enter your age:");

  if (age > 0 && age <= 12) {
    console.log("You are a child.");
  } else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
  } else if (age >= 20 && age <= 64) {
    console.log("You are an adult.");
  } else {
    console.log("You are a pensioner.");
  }
}

/*
15. Beslutstagande
Skapa ett program där användaren får två alternativ (med confirm för båda alternativen), och beroende på deras val, skriv ut ett specifikt resultat.
*/
function decisionMaking() {
  if (confirm("Hello! Want to grab a cup of coffee?") === true) {
    if (
      confirm(
        "Okay, great! Let us go out for a coffee then.\nRight now or later?"
      ) === true
    ) {
      console.log("Okay, see you soon!");
    } else {
      console.log("Okay, see you later!");
    }
  } else {
    if (confirm("Okay, too bad! What about a cup of tea instead?") === true) {
      if (
        confirm(
          "Okay, great! Let us go out for a cup of tea then.\nRight now or later?"
        ) === true
      ) {
        console.log("Okay, see you soon!");
      } else {
        console.log("Okay, see you later!");
      }
    } else {
      console.log("Alright! Let us try to get together another time instead.");
    }
  }
}
