import foo from '../foo';

describe('foo', () => {
    it('adds two numbers', () => {
        const result = foo(1, 2);
        expect(result).toBe(3);
    });
});