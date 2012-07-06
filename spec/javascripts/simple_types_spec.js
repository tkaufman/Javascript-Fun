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
