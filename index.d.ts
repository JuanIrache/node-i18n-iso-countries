export function registerLocale(localeData: {
    locale: string,
    countries: object
}): void;
export function alpha2ToAlpha3(alpha2: string): string;
export function alpha2ToNumeric(alpha2: string): number;
export function alpha3ToAlpha2(alpha3: string): string;
export function alpha3ToNumeric(alpha3: string): number;
export function numericToAlpha2(numeric: number | string): string;
export function numericToAlpha3(numeric: number | string): string;
export function getAlpha2Codes(): object;
export function getAlpha3Codes(): object;
export function getNumericCodes(): object;
export function getName(alpha2ORalpha3ORnumeric: string | number, lang: string): string;
export function getNames(lang: string): object;
export function toAlpha3(alpha2ORnumeric: number | string): string;
export function toAlpha2(alpha3ORnumeric: number | string): string;
export function getAlpha2Code(name: string, lang: string): string;
export function getAlpha3Code(name: string, lang: string): string;
export function langs(): string[];
