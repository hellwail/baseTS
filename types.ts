const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const message: string = 'hello'

const numArray: number[] = [1, 2, 3, 4, 5, 6]
const numArray1: Array<number> = [1, 2, 3, 4, 5, 6]

const words: string[] = ['qwe', 'fgad', 'asd']
const words1: Array<string> = ['qwe', 'fgad', 'asd']

//Tuple
const contact: [string, number] = ['Den', 95423]
//

//Any
let variable: any = 32
variable = 'use str'
//
//===================

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Denis')

//Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true){}
}
//

//Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id:ID = 214
const id1:ID = 'id'
//

type SomeType = null | undefined | string