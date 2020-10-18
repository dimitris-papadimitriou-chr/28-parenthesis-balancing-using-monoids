import { log } from "./log";
import { BalanceMonoid, Balance, toString } from "./Balance";
import { parse } from "./Parser";

{
  let balanceMonoid = new BalanceMonoid();

  let getBalance: (input: string) => Balance = input =>
    Array.from(input)
      .map(parse)
      .reduce(balanceMonoid.concat, balanceMonoid.empty);

  log(toString(getBalance("((()))()"))); //{L:0,R:0}

  log(toString(getBalance("((()))("))); //{L:0,R:1}

  log(toString(getBalance(")((()))("))); //{L:1,R:1}
}
