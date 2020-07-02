function factorialNumber(num) {
    let fact = 1;
    for (let i = num; i > 1 ; i--){
        fact *= i;
    }
    return fact;
}



/**
* Test Suite 
*/
describe('factorialNumber()', () => {
    it('returns factorial of number param', () => {
        // arrange
        const num = 5;
        
        // act
        const result = factorialNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(120);
    });
});