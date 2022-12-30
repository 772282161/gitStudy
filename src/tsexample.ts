export {}
let list:number[] = [1,2,3,4]//在元素类型后面接上[],表示由此类型元素组成的数组
let list1:Array<number> = [1,2,3,4,5] //用数组泛型 Array<number>表示有number元素组成的数组

// 元组 Tuple  元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// // let x:[string,number]
// x = ['hh',2]
// console.log(x[1].toString())


// 枚举类型可以手动指定成员的数值，所以可以通过枚举的值得到它的名字。


// void类型像是与any类型相反，它表示没有任何类型，当一个函数没有返回值时，你通常会见到其返回值内容类型是void
//声明一个void类型的变量，你只能赋予它undefined和null
// 默认情况下，null和undefined是所有类型的子类型，如果你指定了--strictNullChecks标记，null和undefined只能赋值给void和他们自己
// never类型表示的是那些永不存在的值的类型
// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头表达式的返回值类型
// 变量也可能是never类型，当他们被永不为真的类型保护所约束时
// never类型是任何类型的子类型，可以赋值给任何类型，但是没有类型是never类型的子类型，除了never
// 返回never的函数，必须存在无法达到的终点
// Object类型表示非原始类型，也就是除了number,string,boolean,symbol,null和undefined之外的类型


// 类型断言
// 你清楚的知道一个实体具有比他现有类型更确切的类型，类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构
let someValue:any = "this is a string"
let strLength:number = (<string>someValue).length
let strLength1:number = (someValue as string ).length
// 当你在Typescript里使用JSX时，只有as语法断言是被允许的

// if之类的构造首先将他们的条件"强制转换"为布尔值以使其有意义，然后根据结果是真还是假，选择它们的分支
// 以下值全部强制为假，0 NaN ""(空字符串),0n(0bigint)，null,undefined
// 可以通过布尔函数运行值或使用更短的双布尔取反(!!)将值强制转换为布尔值
!!"world"


// type A = Awaited<Promise<string>> // type A = string
// type B = Awaited<Promise<number>> // type B = number
// type C = Awaited<boolean | Promise<number>> // type C = number | boolean

// interface Todo {
//     title:string,
//     description:string,
// }
// function updateTodo(todo:Todo,fieldsToUpdate:Partial<Todo>){
//     return {...todo,...fieldsToUpdate}
// }
// const todo1 = {
//     title:"organize desk",
//     description:"clear clutter"
// }
// const todo2 = {
//     description:"throw out trash"
// }
// updateTodo(todo1,todo2)

// interface Props {
//     a?:number,
//     b?:string
// }
// const obj:Props = {a:5}
// const obj2:Required<Props> = {a:5} //Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

// interface Todo {
//     title:string
// }
// const todo:Readonly<Todo> = {
//     title:"这个属性只读"
// }
// todo.title = "hello"
// //Cannot assign to 'title' because it is a read-only property.
// function freeze<Type>(obj: Type): Readonly<Type> ;
// freeze(todo)

// interface CatInfo {
//     age:number,
//     name:string
// }
// type CatName = "miffy" | "tom" | "jury"
// const cats:Record<CatName,CatInfo> = {
//     miffy:{age:10,name:'this'},
//     tom:{age:11,name:"is"},
//     jury:{age:12,name:"record"}
// }

// interface Todo {
//     title:string,
//     description:string,
//     completed:boolean
// }
// type TodoPreview = Pick<Todo,"title"|"completed">
// const todo:TodoPreview = {
//     title:"it is Pick",
//     completed:false
// }

// interface Todo {
//     title:string,
//     description:string,
//     completed:boolean,
//     createdAt:number
// }
// type TodoPreview = Omit<Todo,"description">
// const todo:TodoPreview = {
//     title:"this is Omit",
//     completed:false,
//     createdAt:12345,
//     description:"123"
//     //Object literals can only specify known properties, and 'description' is not in type 'TodoPreview'.
//     // 对象字面量只能指定已知属性，并且“description”不在类型“TodoPreview”中。
// }

// type T0 = Exclude<string|number|boolean,string>
// const t0:T0 = 1111 
// type T1 = Exclude<string|number|boolean,number|boolean>
// const t1:T1 = "111"
// type T2 = Exclude<string|number|(()=>void),Function|number>
// const t2:T2 = "231"

// type T0 = Extract<string|number|boolean,string|null>
// const t0:T0 = "1111"
// const t1:T0 = null // const t1:string ,不能将null分配给string类型


// type T0 = NonNullable<string| null | undefined>
// const t0:T0 =  "111"
// const t1:T0 = undefined // error 不能将undefined分配给string

// declare function f1(arg:{a:number,b:string}):void
// type T0 = Parameters<()=>string> // type T0 = []
// type T1 = Parameters<(s:string)=>void> // type T1 = [s:string]
// type T2 = Parameters<<T>(arg:T)=>T>  // type T2 = [arg:unknown]
// type T3 = Parameters<typeof f1> // type T3 = [arg:{a:number,b:string}]
// type T4 = Parameters<any> // type T4 = unknown[]
// type T5 = Parameters<never> // type T5 = never
// type T6 = Parameters<string> // error 类型“字符串”不满足约束条件“(...args: any) => any”。
// type T7 = Parameters<Function>// error类型“Function”不满足约束“(...args: any) => any”。
//                               // 类型“Function”提供的内容与签名“(...args: any): any”不匹配。

// type T0 = ConstructorParameters<ErrorConstructor> // type T0 = [message?: string | undefined, options?: ErrorOptions | undefined]
// type T1 = ConstructorParameters<FunctionConstructor> // type T1 = string[]
// type T2 = ConstructorParameters<RegExpConstructor> // type T2 = [pattern: string | RegExp, flags?: string | undefined]
// type T3 = ConstructorParameters<any> // type T3 = unknown[]
// type T4 = ConstructorParameters<Function> // 类型“Function”不满足约束“abstract new (...args: any) => any”。
// // 类型“Function”提供的内容与签名“new (...args: any): any”不匹配。
// // type T4 = never

// declare function f1():{a:number;b:string}
// type T0 = ReturnType<()=>string> // type T0 = string
// type T1 = ReturnType<(s:string) => void> // type T1 = void
// type T2 = ReturnType<<T>()=>T> // type T2 = unknown
// type T3 = ReturnType<<T extends UIEvent,U extends number[]>()=> T> // type T3 = number[]
// type T4 = ReturnType<typeof f1> // type T4 = {a:number;b:string}
// type T5 = ReturnType<any> // type T5 = any
// type T6 = ReturnType<never>
// type T7 = ReturnType<string> // 类型“string”不满足约束“(...args: any) => any”。
// // type T7 = any
// type T8 = ReturnType<Function> // 类型“Function”不满足约束“(...args: any) => any”。
// // 类型“Function”提供的内容与签名“(...args: any): any”不匹配。
// // type T8 = any

// class C { x = 0;y = 0;}
//   type T0 = InstanceType<typeof C>;    
// // type T0 = C
//   type T1 = InstanceType<any>;   
// // type T1 = any
//   type T2 = InstanceType<never>;     
// // type T2 = never
//   type T3 = InstanceType<string>;// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.    
// // type T3 = any
//   type T4 = InstanceType<Function>;
// // Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// // Type 'Function' provides no match for the signature 'new (...args: any): any'.     
// // type T4 = any

// function toHex(this: Number) {
//     return this.toString(16);
//   }
   
//   function numberToString(n: ThisParameterType<typeof toHex>) {
//     return toHex.apply(n);
//   }

// function toHex(this: Number) {
//     return this.toString(16);
//   }
//   const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
//   console.log(fiveToHex());

// type ObjectDescriptor<D, M> = {
//     data?: D;
//     methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
//   };
   
//   function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
//     let data: object = desc.data || {};
//     let methods: object = desc.methods || {};
//     return { ...data, ...methods } as D & M;
//   }
   
//   let obj = makeObject({
//     data: { x: 0, y: 0 },
//     methods: {
//       moveBy(dx: number, dy: number) {
//         this.x += dx; // Strongly typed this
//         this.y += dy; // Strongly typed this
//       },
//     },
//   });
   
//   obj.x = 10;
//   obj.y = 20;
//   obj.moveBy(5, 5);

// function fnc(fn:(s:string)=>void){}
// type func=(s:string)=>void
// function fnc1(fn:func) {
//     // ...
// }

// type DescribableFunction = {
//     description:string,
//     (someArg:number):boolean
// }
// function doSomething(fn:DescribableFunction){
//     console.log(fn.description+"returned"+fn(7))
// }

// type Print = <T>(arg:T)=>T
// const printFn:Print = function print(arg) {
//     console.log(arg)
//     return arg
// }

// interface Imprint<T> {
//     (arg:T):T
// }
// function print<T>(arg:T){
//     console.log(arg)
//     return arg
// }
// const myPrint:Imprint<number> = print

// function identity(arg:number):number {
//     return arg
// }

// function identity(arg:any):any{
//     return arg
// }

// function identity<Type>(arg:Type):Type{
//     return arg
// }
// let output = identity<string>("myString")
// let output = identity<string>("myString")
// function identity<Type>(arg: Type): Type {
//     return arg;
// }

// function loggingIdentity<Type>(arg: Type): Type {
//     console.log(arg.length);
// //   Property 'length' does not exist on type 'Type'.
//     return arg;
// }
// function loggingIdentity<Type>(arg: Type[]): Type[] {
//     console.log(arg.length);
//     return arg;
// }


// function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
//     console.log(arg.length); // Array has a .length, so no more error
//     return arg;
// }

// function identity<Type>(arg: Type): Type {
//     return arg;
// }
   
// let myIdentity: <Type>(arg: Type) => Type = identity;

// function identity<Type>(arg: Type): Type {
//     return arg;
// }
   
// let myIdentity: <Input>(arg: Input) => Input = identity;

// function identity<Type>(arg: Type): Type {
//     return arg;
// }
// let myIdentity: { <Type>(arg: Type): Type } = identity;

// interface GenericIdentityFn {
//     <Type>(arg: Type): Type;
// }
   
// function identity<Type>(arg: Type): Type {
//     return arg;
// }
   
// let myIdentity: GenericIdentityFn = identity;

// interface GenericIdentityFn<Type> {
//     (arg: Type): Type;
// } 
// function identity<Type>(arg: Type): Type {
//     return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//     return x + y;
// };
// class GenericNumber<NumType> {
//     zeroValue: NumType | undefined;
//     add: ((x: NumType, y: NumType) => NumType) | undefined;
// }
// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x, y) {
//   return x + y;
// };
// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// function loggingIdentity<Type>(arg: Type): Type {
//     console.log(arg.length);
// //   Property 'length' does not exist on type 'Type'.
//     return arg;
//   }

// interface Lengthwise {
//     length: number;
// }
// function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
//     console.log(arg.length); // Now we know it has a .length property, so no more error
//     return arg;
// }

// loggingIdentity(3);
// // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

// loggingIdentity({ length: 10, value: 3 });
// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key];
//   }
   
//   let x = { a: 1, b: 2, c: 3, d: 4 };
   
//   getProperty(x, "a");
//   getProperty(x, "m");
// //   Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

// function create<Type>(c: { new (): Type }): Type {
//     return new c();
//   }

// class BeeKeeper {
//     hasMask: boolean = true;
//   }
//   class ZooKeeper {
//     nametag: string = "Mikle";
//   }
//   class Animal {
//     numLegs: number = 4;
//   }
//   class Bee extends Animal {
//     keeper: BeeKeeper = new BeeKeeper();
//   }
//   class Lion extends Animal {
//     keeper: ZooKeeper = new ZooKeeper();
//   }
//   function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
//   }
//   createInstance(Lion).keeper.nametag;
//   createInstance(Bee).keeper.hasMask;

// type Point = { x: number; y: number };
// type P = keyof Point;
// // type P = keyof Point
// type Arrayish = { [n: number]: unknown };
// type A = keyof Arrayish;// type A = number
 
// type Mapish = { [k: string]: boolean };
// type M = keyof Mapish;// type M = string | number

function identity<Type>(a:Type):Type {
    return a
}