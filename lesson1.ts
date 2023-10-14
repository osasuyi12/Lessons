// /**
//  * Assignment
//  * Create an interface with name City
//  * the functtions in the interface should be 
//  * 1. numberOfRoads
//  * 2. numberOfHouses
//  * 3. haveInternetCoverage
//  * 
//  * 
//  * Create abstract class with name Place with functions 
//  * 1. geographicalLocation and 
//  * 2. continent.
//  * the geographicalLocation should return on the latitude of the place and the continent should return the name of the continent.
//  * 
//  * Create concrete classes with name of at least five cities in the world that
//  * have their own implementaions for the first three functions of the interface above
//  * and have implementation for the functions in the abstract class above.
//  */
// interface City {
//     numberOfRoads(): number;
//     numbrOfHouses(): number;
//     haveInternetCoverage(): boolean
// }
// abstract class Place {
//   public abstract geographicalLocation(): number;
//   public continent(continentName: string): string{
//     return continentName;
//    }
// }
// class Abuja implements City {
// public geographicalLocation(): number{
//     return 3.002
// }
// public continent(continentName: string){
//     return "Africa"
// }
// numberOfRoads(): number{
//     return 500
// }
// numberOfHouse(): number{
//     return 1000
// }
// haveInternentCoverage(): boolean{
//     return true;
// }
// }
// const abuja = new Abuja();
// console.log(`continent: Abuja.continent("")`);