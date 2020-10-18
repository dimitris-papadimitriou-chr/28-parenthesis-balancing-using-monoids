import { log } from "./log";
import { BalanceMonoid, Balance } from "./Balance";
import { parse } from "./Parser";

var weight = new BalanceMonoid();
var getBalance: (input: string) => Balance = input =>
  Array.from(input)
    .map(parse)
    .reduce(weight.concat, weight.empty);

{
  let parsed = getBalance("((()))()"); //{L:0,R:0}

  log(`left:${parsed.L},Right:${parsed.R} is balanced:${parsed.isBalanced()}`);
}

{
  let parsed = Array.from("((()))(")
    .map(parse)
    .reduce(weight.concat, weight.empty); //{L:0,R:1}

  log(`left:${parsed.L},Right:${parsed.R} is balanced:${parsed.isBalanced()}`);
}

{
  let parsed = Array.from(")((()))(")
    .map(parse)
    .reduce(weight.concat, weight.empty); //{L:1,R:1}

  log(`left:${parsed.L},Right:${parsed.R} is balanced:${parsed.isBalanced()}`);
}
