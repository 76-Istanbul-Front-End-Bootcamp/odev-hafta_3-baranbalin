class Animal {
    
    constructor(name) {
        this.name = name;
    }

    action() {
        document.getElementById(this.actionSoundName).play();
    }

    image() {
        document.getElementById("animals").src = this.img;

    }

    putInTheDocument() { 
        var petsTable = document.getElementById("petsTable");
        var petTR = document.createElement("tr");
    
        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        petTR.appendChild(petNameTD);
    
        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        petTR.appendChild(petLegsTD);
    
        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        petTR.appendChild(petActionTD);
        
        petActionTDButton.onclick = this.action.bind(this);
        petTR.onclick = this.image.bind(this);
        petsTable.querySelector("tbody").appendChild(petTR)
    }

}

class Cat extends Animal{
    constructor(name) {
        super(name);
        this.legs = 4;
        this.actionText = "Meoow"
        this.actionSoundName = "meow"
        this.img = "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=37%2C29%2C4955%2C3293&q=45&auto=format&w=926&fit=clip"
    }
}


class Monkey extends Animal{
    constructor(name) {
        super(name);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
        this.img = "https://images.theconversation.com/files/56078/original/zkmxyt9c-1407516907.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=900&fit=crop&dpr=2"

    }
}


var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
