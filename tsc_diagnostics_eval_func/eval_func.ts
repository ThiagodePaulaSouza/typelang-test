import { Eval } from "typelang/src";
type Result = Eval<`
    (Fun SayHello (first last) (Join "Hello " first " " last))
    (SayHello "John" "Doe")
    `>;