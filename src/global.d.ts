declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames
}


declare module "*.jpg" 
declare module "*.jpeg" 
declare module "*.png" 


declare const __IS_DEV__: boolean;