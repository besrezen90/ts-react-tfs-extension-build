declare module "*.less" {
  const content: any;
  //export = content;
  export default content;
}

declare module "*.png" {
  const content: any;
  //export = content;
  export default content;
}

declare var CONFIG: string;
declare var module: any;

declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P]
};

declare interface CSSStyleDeclaration {
  willChange: string;
}
