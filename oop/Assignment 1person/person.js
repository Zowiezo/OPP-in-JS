function person(name, surname, age, gender, interests, greeting) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender
    this.interests = interests;
    this.greeting = greeting
};

let firstPerson = new person("Nosipho", "Masondo", "8", "female", "dancing, singing", "Hello");
let secondPerson = new person("Thando", "Ngwane", "16", "male", "playing games and drawing");
let p

console.log(`${firstPerson.greeting}, I'm ${firstPerson.name}.`);
console.log(`I am ${secondPerson.name} ${secondPerson.surname}, I am ${secondPerson.age} and my interests are ${secondPerson.interests}.`);