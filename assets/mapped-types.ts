interface Person {
    name: string
    age: number
}

type PersonProps = keyof Person
// type PersonProps = 'name' | 'age'



type Keys = 'option1' | 'option2';
type Flags = { [K in Keys]: boolean };

const flags: Flags = {
    option1: true,
    // error: option2 missing
}