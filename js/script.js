const people=[
    new Person("../../images/president/Abraham Licoln.png"), 
    new Person("../../images/other/vice_1.png"), 
]
let person=people[~~Math.random()*2];
document.getElementById("person").src = person.getPath();