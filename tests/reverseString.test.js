var reverse = require('../code/reversestring')

test("returns the given array reversed", function(){
    expect(reverse([1, 2, 3])).toStrictEqual([3, 2, 1])
})
