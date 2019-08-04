const index = require('./index');

test('should return Yes', ()=>{
    expect(typeof index([25, 25, 50, 50])).toBe('string')
})
test('should return Yes', ()=>{
    expect(typeof index([25, 100])).toBe('string')
})
