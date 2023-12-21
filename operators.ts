interface Person {
    name: string
    age: number
}

type Personkeys = keyof Person

let key: Personkeys = 'name'
key = 'age'
/// key = 'da'

type User ={
    _id: number 
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>
type UserKeysNoMeta1 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta = 'name'
///u1 = '_id'


