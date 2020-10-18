import { BalanceMonoid, Balance } from "./Balance";
export let parse: (c: string) => Balance = (c: string) => {
  switch (c) {
    case "(":
      return Balance.Left;
    case ")":
      return Balance.Right;
    default:
      return Balance.Empty;
  }
};
