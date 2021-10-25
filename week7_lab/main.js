/** Constructors **/

function Penguin(name, age) {
    this.name = name;
    this.age = age;
    this.image = "penguin.png";
    this.image_alt = "A random penguin";
}
  
function PolarBear(name, age) {
    this.name = name;
    this.age = age;
    this.image = "polar_bear.png"
    this.image_alt = "A random polar bear";
}
  
function Fish(name, age) {
    this.name = name;
    this.age = age;
    this.image = "fish.png";
    this.image_alt = "A random fish";
}

let animals = [new Penguin(), new PolarBear(), new Fish()];
let names = ["Joe", "Ethan", "Andy", "Wonho", "Will", "Nathan", "Jun"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    let i = generateRandomIndex(names.length);
    return names[i];
}

function generateRandomAge() {
    return generateRandomIndex(5);
}

function generateRandomAnimal() {
    let i  = generateRandomIndex(animals.length);
    let a = animals[i];
    if (a instanceof Penguin) {
        return new Penguin(generateRandomName(), generateRandomAge());
    }
    else if (a instanceof PolarBear) {
        return new PolarBear(generateRandomName(), generateRandomAge());
    }
    else if (a instanceof Fish) {
        return new Fish(generateRandomName(), generateRandomAge());
    }
}

/*** Document Load ****/
function onLoad() {

    // generate a random animal when the document opens
    var animal = generateRandomAnimal();
    console.log(animal)
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + " years old";
    document.getElementById("animal-img").setAttribute("src", animal.image)
  
  };