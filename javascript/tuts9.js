let people = ["Sabriel", "Aeron", "Khing", "Emerson"];
let search = "Sabriel";
let isFound = false;

for (let i = 0; i < people.length; i++) {
  if (people[i].toLowerCase() === search.toLowerCase()) {
    isFound = true;
    console.log(`Found ${people[i]}`);
    break;
  }
}

if (!isFound) console.log("Not Found");

//FOR loop | IN | OF | BREAK