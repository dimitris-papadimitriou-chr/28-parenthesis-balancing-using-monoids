# 28-parenthesis-balancing-using-monoids

he Parenthesis Balancing problem is a classic problem that says :

> 

> **Given an expression string exp, write a program to examine whether the pairs and the orders of “(“, “)” are correct in exp.**

so this `(()()()())`is balanced but this one `()))` is not

in this article we are going to solve this in a functional manner using Typescript and the monoids from the previous article.

[Monoids in TypeScript“Alternatively, the fundamental notion of category theory is that of a Monoid”medium.com](https://medium.com/@dimpapadim3/monoids-in-typescript-59a9c1510993)

we are going to define a simple balance type that will hold the number of the left end right values.

```javascript
class Balance {

    static Left = new Balance(0, 1)
    static Right = new Balance(1, 0)
    static Empty = new Balance(0, 0)

    L: number
    R: number
    constructor(l: number, r: number) {
        this.L = l;
        this.R = r;
    }
}

```

this amazingly forms a monoid. Since we can concatenate two Balance objects and get a new balance.



```javascript
class BalanceMonoid {
    empty: Balance = Balance.Empty;
    concat(x: Balance, y: Balance): Balance {
        if (x.R < y.L)
            return new Balance(x.L + y.L - x.R, y.R);
        else
            return new Balance(x.L, y.R + x.R - y.L);
    }
}


```



Hopefully this makes the rest of the idea obvious.

1. we will split the string in an array of characters
2. then we will convert each character in a balance (parse)
3. and then we will reduce the array with the Balance monoid.

the simple parsing function would be something like this :



```javascript
var parse: (c: string) => Balance = (c: string) => {
    switch (c) {
        case "(": return Balance.Left
        case ")": return Balance.Right
        default: return Balance.Empty
    }
}


```



so finally we can write the computation like this :



```javascript
var weight = new BalanceMonoid();
var getBalance: (input: string) => Balance = input =>
  Array.from(input)
    .map(parse)
    .reduce(weight.concat, weight.empty);

let parsed = getBalance("((()))()"); //{L:0,R:0}


```



[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/28-parenthesis-balancing-using-monoids)