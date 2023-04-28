export class StringHelper {
  public static toCapitalLetter(input: string) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
}