class person{
    constructor(name='Pata nahi',age=0){
        this.name=name;
        this.age=age;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class student extends person{
    constructor(name,age,branch='Pata nahi'){
        super(name,age);
        this.branch=branch;
    }

    getDescription(){
        if(this.branch !== 'Pata nahi'){
            return super.getDescription() + ` His branch is ${this.branch}`;
        }
        else{
            return super.getDescription()
        }
    }
}


class traveller extends person{
    constructor(name,age,HomeLocation='Pata nahi'){
        super(name,age)
        this.HomeLocation=HomeLocation;
    }

    getDescription(){
        if(this.HomeLocation !== 'Pata nahi'){
            return super.getDescription() + `His address is ${this.HomeLocation}.`
        }
        else{
            return super.getDescription()
        }
    }
}


const me=new student('dhruv',20,'Computer Science')
const other=new student('Kuch bhi',30);

console.log(me)
console.log(me.getDescription())

console.log(other)
console.log(other.getDescription())


const met=new traveller('dhruv',20,'Ambala cantt')
const othert=new traveller('Kuch bhi',30);


console.log(met)
console.log(met.getDescription())

console.log(othert)
console.log(othert.getDescription())