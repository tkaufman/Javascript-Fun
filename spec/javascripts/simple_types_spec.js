describe("parseInt", function(){
  it("should parse strings", function(){
    expect(parseInt("1234")).toBe(1234);
  });
  it("does weird things with leading 0s", function(){
    expect(parseInt("010")).toBe(8);
  });
  it("works normally when passed a base", function(){
    expect(parseInt("010", 10)).toBe(10);
  });
  it("returns NaN when strings aren't ints", function(){
    expect(isNaN(parseInt("pants"))).toBe(true);
  });
});

describe("false primitives", function(){
  it("should evaluate NaN as false", function(){
    expect(Boolean(NaN)).toBe(false)
  });
  it("should evaluate '' as false", function(){
    expect(Boolean('')).toBe(false)
  });
  it("should evaluate 0 as false", function(){
    expect(Boolean(0)).toBe(false)
  });
  it("should evaluate null as false", function(){
    expect(Boolean(null)).toBe(false)
  });
  it("should evaluate undefined as false", function(){
    var a;
    expect(Boolean(a)).toBe(false)
  });
});

describe("comparisons", function(){
  it("should equate 1 to 1 with ==", function(){
    expect(1==1).toBe(true)
  });
  it("should equate 1 to true with ==", function(){
    expect(1==true).toBe(true)
  });
  it("should NOT equate 1 to true with ===", function(){
    expect(1===true).toBe(false)
  });
});

describe("objects", function(){
  it("should create objects with curlies", function(){
    var obj = {}
    expect(obj == null).toBe(false)
  });
  it("should create objects old school", function(){
    var obj = new Object()
    expect(obj == null).toBe(false)
  });
  it("should access names by [] and dot", function() {
    var obj = {name: "some_name"}
    expect(obj["name"] == obj.name).toBe(true)
  })
  it("should access names by [] and dot, even when nested", function() {
    var obj = 
        {
            name: "some_name",
            details: {
                sub_detail: "sub_detail"
            }
        }
    expect(obj["details"]["sub_detail"] == obj.details.sub_detail).toBe(true)
  })
});

describe("array.length", function() {
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
});

describe("arrays", function() {
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

describe("function parameters", function() {
  function zerbert(a) {
    return a + "brt"
  }
  
  it("should accept the exact number of parameters", function() {
    expect (zerbert("z")).toBe("zbrt")
  })
  it("should discard extra parameters", function() {
    expect (zerbert("z", "b", "c")).toBe("zbrt")
  })
  it("should treat missing parameters as undefined", function() {
    expect (zerbert()).toBe("undefinedbrt")
  })

  function superbert() {
	var result = ""
	for (var i=0, j=arguments.length; i<j; i++) {
	  result += arguments[i]
	}
	return result + "brt"
  }

  it("should access any number of possible parameters with the arguments variable", function() {
	expect(superbert("a", "b", "c")).toBe("abcbrt")
  })
});
