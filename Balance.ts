import { monoid } from "./Monoid";

export class Balance {
  static Left = new Balance(0, 1);
  static Right = new Balance(1, 0);
  static Empty = new Balance(0, 0);

  L: number;
  R: number;
  constructor(l: number, r: number) {
    this.L = l;
    this.R = r;
  }
  isBalanced(): boolean {
    return this.L == 0 && this.R == 0;
  }
}

export class BalanceMonoid implements monoid<Balance> {
  empty: Balance = Balance.Empty;
  concat(x: Balance, y: Balance): Balance {
    if (x.R < y.L) return new Balance(x.L + y.L - x.R, y.R);
    else return new Balance(x.L, y.R + x.R - y.L);
  }
}
