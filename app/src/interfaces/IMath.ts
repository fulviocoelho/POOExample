import ISubstractionInfo from "./ISubstractionInfo";

export default interface IMath {
    isPositive: (number: number) => boolean;
    isNegative: (number: number) => boolean;
    canSubstract: ({ number, subtracted }: ISubstractionInfo) => boolean;
}