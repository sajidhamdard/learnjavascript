### ==========object==========

object ak datastructure hain. jiska use hum data store karne me karte hain.object me data
key value ki form me store hoti hian.

Yadi hum same kam array se kar na chahye to kar skte hain. lakin array me humye index
mainten kar ne padyegi.index yad kar pana kafi tuff hota hain.isleye hum index ki jgha
key ka use karte hain. issye key humasa same rahate hain.par value change ho skte hain.

- Object literal syntax

```
var obj={
    name:"learnjavascript"
}
```

- object using new key word

```
var obj=new object();
```

- annotation

```
var obj={
    name:"learnjavascript"
    age:30
}
```

- dot annotation

```
var age =obj.age;
var name=obj.name;
```

- Bracket annotation;

```
var age = obj['age'];
var name=obj['name'];
```

Defference between brecket annotation and dot annotation

dot annotation me hum actual key ka name likna hota hain.iske leye hum koi variable etc
use nahi kar skte hain.pr brecket annotationme hum variable bhi use kar skte hain.
variable ki jo value hogi vo value object ke andr key ke form me search hogi or vahi
answer hoga.

- for example:

```

let obj ={
    name:"learnjavascript"
    age:20
}

var a ="age";
console.log(obj.age);//correct
console.log(obj.a);// wrong because a name ke koi property nahi hain
console.log(obj["age"]);//correct
console.log(obj['a']);//brecket annotation me a variable ke value age hain.to object me
//age key search hogi na ke a.
```
