describe("arrays", function() {
  it("should have a special length property", function() {
    var arr = ["1", "2", "3"];
    expect(arr.length).toBe(3)
  })
  it("should return 1 + the maximum index, not the length", function() {
    var arr = ["1", 2];
    arr[100] = "puppies";
    expect(arr.length).toNotBe(3)
    expect(arr.length).toBe(101)
  })

  it("should allow any types", function() {
    var arr = ["1", 2, null];
    expect(arr.length).toBe(3)
  })
  it("should return undefined on missing elements", function() {
    var arr = ["1", "2", "3"];
    expect(arr[99]).toBe(undefined)
  })
});

describe("array.concat", function() {
  it("should concatenate arrays", function() {
    var array = [1,2,3]
    var newArray = array.concat([4,5])
    expect(newArray.toString()).toBe("1,2,3,4,5")
  })
});

describe("array push and pop", function() {
  it("should return the last value with pop", function() {
    var array = [1,2,3]
    expect(array.pop()).toBe(3)
  })
  it("should remove the last value with pop", function() {
    var array = [1,2,3]
    array.pop()
    expect(array.toString()).toBe("1,2")
  })
  it("should add to the end with push", function() {
    var array = [1,2]
    array.push(3)
    expect(array.toString()).toBe("1,2,3")
  })
});

describe("array push and pop", function() {
  it("should return a sorted array upon request", function() {
    var array = [4,2,5,6]
    expect(array.sort().toString()).toBe("2,4,5,6")
  })
});

describe("array slice, splice, and unshift", function() {
  it("should return a subarray when slice is called", function() {
    var array = [1,2,3,4]
    expect(array.slice(1,3).toString()).toBe("2,3")
  })
  it("should return and replace when splice is called", function() {
    var array = [1,2,3,4]
    expect(array.splice(3, 1, 5).toString()).toBe("4")
    expect(array.toString()).toBe("1,2,3,5");
  })
  it("should prepend items when unshift is called", function() {
    var array = [1,2,3]
    expect(array.unshift(-1,0)).toBe(array.length)
    expect(array.toString()).toBe("-1,0,1,2,3")
  })
});

