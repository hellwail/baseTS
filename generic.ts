const arrayOfNumbers: Array<number> = [1,1,2,4,6,7]
const arrayOfStrings: Array<string> = ['sdfgsdf', 'gfdsgfds']


function reverse<T>(array: T[]): T[] {
    return array.reverse()
}
reverse(arrayOfNumbers)
reverse(arrayOfStrings)