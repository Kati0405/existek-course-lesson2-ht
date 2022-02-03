import { Component } from '@angular/core';

enum Race {elf="elf", human="human", dwarf="dwarf", gnome="gnome", troll="troll"}
enum Sex {male="M", female="F"}

interface ICharacter {
    name: string;
    race: Race;
    sex: Sex;
    }

enum Profession {archer="archer", warrior="warrior", priest="priest", mage="mage", druid="druid"}

class Character implements ICharacter {
    name: string;
    race: Race;
    sex: Sex;
    profession: Profession;
    level: number;

    constructor(name: string, race: Race, sex: Sex, profession: Profession, level: number){
        this.name = name,
        this.race=race,
        this.sex = sex,
        this.profession = profession,
        this.level = level
    }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  
  title = 'lesson2-ht';
  name = "Your name";
  age = "Your age"

  listOfChars = [

  new Character("Qiqi", Race.human, Sex.female, Profession.priest, 1),
  new Character("Amber", Race.elf, Sex.female, Profession.archer, 10),
  new Character("Razor", Race.troll, Sex.male, Profession.warrior, 5)
  ]

  activeChar: Character = this.listOfChars[0]

  
  color: string = 'red';

  listOfColors = ['red', 'blue', 'green', 'black']

  

  text = false;
  handleClick(){
    this.text = !this.text;
    console.log(this.activeChar)
  }

  pickRandomPhrase(): void {
    let phrases = ['Yes', 'No', 'Maybe', 'Not likely', 'Absolutely no', 'Great idea'];
    let phrase = phrases[Math.floor(Math.random()*phrases.length-1)];
    
    alert(phrase);

   

  }
}
