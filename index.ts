import type { Eval } from "./node_modules/typelang/src";

const withoutTypeLang = () => {
    const startTimeType = performance.now()
    type N = null;
    type STR = "hello"
    type BL = true
    const endTimeType = performance.now()

    const startTimeSign = performance.now()
    const a: N = null;
    const b: STR = "hello";
    const c: BL = true;
    const endTimeSign = performance.now()

    console.log('Without TypeLang Example:', a, b, c);

    console.log(`to Type it tooks: ${endTimeType - startTimeType} milliseconds`)
    console.log(`to Sign it tooks: ${endTimeSign - startTimeSign} milliseconds`)
}

const firstExample = () => {
    const startTimeType = performance.now()
    type Result1 = Eval<''>; // null
    type Result2 = Eval<'123'>; // '123'
    type Result3 = Eval<'"hello"'>; // 'hello'
    type Result4 = Eval<'True'>; // true
    type Result5 = Eval<'False'>; // false
    const endTimeType = performance.now()

    const startTimeSign = performance.now()
    const a: Result1 = null;
    const b: Result2 = '123';
    const c: Result3 = 'hello';
    const d: Result4 = true;
    const e: Result5 = false;
    const endTimeSign = performance.now()

    console.log('\nFirst Example:', a, b, c, d, e);

    console.log(`to Type it tooks: ${endTimeType - startTimeType} milliseconds`)
    console.log(`to Sign it tooks: ${endTimeSign - startTimeSign} milliseconds`)
}

const secondExample = () => {
    const startTimeType = performance.now()
    type Result1 = Eval<'(If True "yes" "no")'>; // 'yes'
    type Result2 = Eval<'(If False "yes" "no")'>; // 'no'
    const endTimeType = performance.now()

    const startTimeSign = performance.now()
    const a: Result1 = "yes";
    const b: Result2 = "no";
    const endTimeSign = performance.now()

    console.log('\nSecond Example:', a, b);
    console.log(`to Type it tooks: ${endTimeType - startTimeType} milliseconds`)
    console.log(`to Sign it tooks: ${endTimeSign - startTimeSign} milliseconds`)
}

const thirdExample = () => {
    const startTimeType = performance.now()
    type Result1 = Eval<'(Join "a" "b" "c" "d")'>; // 'abcd'
    type Result2 = Eval<'(Eq 2 2)'>; // true
    type Result3 = Eval<'(Eq "you" "me")'>; // false
    type Result4 = Eval<'(And True True)'>; // true
    type Result5 = Eval<'(And False False)'>; // false
    type Result6 = Eval<'(Or True False)'>; // true
    type Result7 = Eval<'(Or False True)'>; // true
    type Result8 = Eval<'(++ 2)'>; // '3'
    type Result9 = Eval<'(-- 5)'>; // '4'
    const endTimeType = performance.now()

    const startTimeSign = performance.now()
    const a: Result1 = 'abcd';
    const b: Result2 = true;
    const c: Result3 = false;
    const d: Result4 = true;
    const e: Result5 = false;
    const f: Result6 = true;
    const g: Result7 = true;
    const h: Result8 = "3";
    const i: Result9 = "4";
    const endTimeSign = performance.now()

    console.log('\nSecond Example:', a, b, c, d, e, f, g, h, i);
    
    console.log(`to Type it tooks: ${endTimeType - startTimeType} milliseconds`)
    console.log(`to Sign it tooks: ${endTimeSign - startTimeSign} milliseconds`)
}

const fourthExample = () => {
    const startTimeType = performance.now()
    type Result1 = Eval<'(Def x 1) x'>; // '1'
    type Result2 = Eval<'undefined_variable'>; // null
    type Result3 = Eval<'(Def x 2) (++ x)'>; // '3'
    type Result4 = Eval<`
    (Def x (++ 3))
    (Def y (++ x))
    (Join "result: " y)
    `>; // 'result: 5'
    const endTimeType = performance.now()

    const startTimeSign = performance.now()
    const a: Result1 = "1";
    const b: Result2 = null;
    const c: Result3 = "3";
    const d: Result4 = "result: 5";
    const endTimeSign = performance.now()

    console.log('\nFourth Example:', a, b, c, d);
    
    console.log(`to Type it tooks: ${endTimeType - startTimeType} milliseconds`)
    console.log(`to Sign it tooks: ${endTimeSign - startTimeSign} milliseconds`)
}

const fifthExample = () => {
    const startTimeType = performance.now()
    type Result = Eval<`
    (Fun SayHello (first last) (Join "Hello " first " " last))
    (SayHello "John" "Doe")
    `>; // 'Hello John Doe'
    const endTimeType = performance.now()

    const startTimeSign = performance.now()
    const a: Result = "Hello John Doe";
    const endTimeSign = performance.now()

    console.log('\nFifth Example:', a);
    
    console.log(`to Type it tooks: ${endTimeType - startTimeType} milliseconds`)
    console.log(`to Sign it tooks: ${endTimeSign - startTimeSign} milliseconds`)
}

const sixthExample = () => {
    const startTimeType = performance.now()
    type Result1 = Eval<'(++ 1) (++ 2)'>; // '3'
    type Result2 = Eval<'(Eq 1 1) (Eq 2 3)'>; // false
    const endTimeType = performance.now()

    const startTimeSign = performance.now()
    const a: Result1 = "3";
    const b: Result2 = false;
    const endTimeSign = performance.now()

    console.log('\nSixthExample', a, b)
    
    console.log(`to Type it tooks: ${endTimeType - startTimeType} milliseconds`)
    console.log(`to Sign it tooks: ${endTimeSign - startTimeSign} milliseconds`)
}

const seventhExample = () => {
    const startTimeType = performance.now()
    type Result1 = Eval<'(++ (++ '>; // never
    type Result2 = Eval<') ++'>; // never
    type Result3 = Eval<'"aa'>; // never
    const endTimeType = performance.now()

    // if try to sign this var => Type - is not assignable to type 'never'.ts(2322)
    const startTimeSign = performance.now()
    let a: Result1; 
    let b: Result2;
    let c: Result3;
    const endTimeSign = performance.now()

    console.log('\nSeventhExample')
    
    console.log(`to Type it tooks: ${endTimeType - startTimeType} milliseconds`)
    console.log(`to Sign it tooks: ${endTimeSign - startTimeSign} milliseconds`)
}

const executingTimeMostComplexComparedToSimpleSigned = () => {
    const startTimeType1 = performance.now()
    type Result = Eval<`
    (Fun SayHello (first last) (Join "Hello " first " " last))
    (SayHello "John" "Doe")
    `>; // 'Hello John Doe'
    const endTimeType1 = performance.now()

    const startTimeType2 = performance.now()
    type Result2 = 'Hello John Doe'; // 'Hello John Doe'
    const endTimeType2 = performance.now()

    console.log('\nexecutingTimeMostComplexComparedToSimpleSigned')
    console.log(`to TypeLang it tooks: ${startTimeType1 - startTimeType1} milliseconds`)
    console.log(`to TypeNormal it tooks: ${endTimeType2 - startTimeType2} milliseconds`)
    //to TypeLang it tooks: 0 milliseconds
    //to TypeNormal it tooks (+-) : 0.00046 milliseconds 
}

withoutTypeLang();
firstExample();
secondExample();
thirdExample();
fourthExample();
fifthExample();
sixthExample();
seventhExample();
executingTimeMostComplexComparedToSimpleSigned();