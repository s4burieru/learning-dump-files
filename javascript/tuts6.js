let ages = 15;
let isRegistered = false;

if(ages >= 18 && isRegistered) {
    console.log("Valid voter");
}else if (ages >= 18 && !isRegistered) {
    console.log("Register first");
} else if (ages < 18 && isRegistered) {
    console.log("Invalid voter");
} else if (ages < 18 && !isRegistered) {
    console.log("Non voter");
}

//logical operators 
// && means AND
// || means OR
// ! means NOT