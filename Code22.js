person={name:"piyush",age:32,place:"kota",address:{pin:323232,loc:"gumanpura"}}
console.log(person)
class person{
    var name;
    var age;
    var place;
function person(name,age,place)
{
    this.name=name;
    this.age=age;
    this.place=place;
}
}

car p=new person("kunal",23,"pune")
console.log(p);