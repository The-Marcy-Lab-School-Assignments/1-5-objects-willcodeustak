const coolGreeting = (person) => {
  if (person && person.isCool) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`;
  } else {
    return `Greetings ${person.name}, how have you been lately?`;
  }
};

const person1 = {
  name: "Sara",
  bio: "Too cool 4 skool.",
  age: 32,
  isCool: true,
};

const person2 = {
  name: "Mike",
  bio: "Not cool",
  age: 28,
  isCool: false,
};

const haveBirthday = (person) => {
  person.age++;
};

const person = {
  name: "Sara",
  bio: "Too cool 4 skool.",
  age: 32,
  isCool: true,
};

// console.log(person.age); //32
// haveBirthday(person);
// console.log(person.age); //33
// haveBirthday(person1);
// console.log(person.age); //34

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;

  person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
  const car1 = {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false,
  };

  return car1;
};
const car1 = carMaker("Toyota", "Japan", 2000);
// console.log(car1);

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${person.name} likes ${person.hobbies[i]}.`);
  }
};
const jo = {
  name: "Jo",
  age: 34,
  hobbies: ["running", "biking", "baking", "jumping"],
};

{
}

//listHobbies(jo);

const getNextOpponent = (team) => {
  if (team.matches.length === 0) {
    return null;
  } else {
    return team.matches[0].teamName;
  }
};
const fighters = {
  name: "Fighters",
  sport: "basketball",
  wins: 3,
  location: {
    city: "Bridgeport",
    state: "CT",
  },
  matches: [
    {
      teamName: "Dunkaroos",
      skill: 9,
      wins: 12,
    },
    {
      teamName: "Space Jammers",
      skill: 10,
      wins: 16,
    },
    {
      teamName: "Mustangs",
      skill: 6,
      wins: 10,
    },
  ],
};
console.log(getNextOpponent(fighters));
const listAllKeys = () => {};

const listAllValues = () => {};

const convertToMatrix = () => {};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
