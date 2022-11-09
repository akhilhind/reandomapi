import { PersonInterface } from "./PersonInterface";

export class Person implements PersonInterface {
    name: string;
    age: number;
    gender: string;
    alive: boolean;
    constructor(person: PersonInterface) {
        <PersonInterface>Object.assign(this, person);
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    isAlive() {
        return this.alive? "this person is alive": "This person is dead";
    }
    getGender() {
        return this.gender;
    }
}