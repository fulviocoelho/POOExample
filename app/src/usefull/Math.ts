import IMath from "../interfaces/IMath"
import ISubstractionInfo from "../interfaces/ISubstractionInfo"

export default class Math implements IMath{
    public isPositive(number: number) {
        return number > 0 ? true: false
    }
    
    public isNegative(number: number) {
        return number < 0 ? true: false
    }
    
    public canSubstract({ number, subtracted }: ISubstractionInfo) {
        return (number - subtracted) >= 0 ? true: false
    }
}