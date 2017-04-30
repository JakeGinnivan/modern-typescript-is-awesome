interface Person {
    name: string
    age: number
    sex: 'm' | 'f'
}
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// }
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// }
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// }

type PersonPartial = Partial<Person>
type ReadonlyPerson = Readonly<Person>
type SimplePerson = Pick<Person, 'name' | 'age'>