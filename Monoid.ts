export interface monoid<T> {
  empty: T;
  concat: (u: T, v: T) => T;
}
