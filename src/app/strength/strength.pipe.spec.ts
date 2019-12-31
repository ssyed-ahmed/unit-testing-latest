import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
    let pipe;
    beforeEach(() => {
        pipe = new StrengthPipe();
    })

    it('should display weak if strength is 5', () => {
        expect(pipe.transform(5)).toEqual('5 (weak)');
    })

    it('should display strong if strength is 15', () => {
        expect(pipe.transform(15)).toEqual('15 (strong)');
    })

    it('should display unbelievable if strength is 100', () => {
        expect(pipe.transform(100)).toEqual('100 (unbelievable)')
    })
})