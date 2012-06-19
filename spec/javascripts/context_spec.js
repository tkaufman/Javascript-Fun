describe("context", function() {
  function set_stuff(a) {
    this.stuff =  a + "Stuff!"
  }

  it("this will be the global context not called on an object", function() {
    set_stuff("Global")
    expect(stuff).toBe("GlobalStuff!")
  })

  it("this should apply to a simple object", function() {
    fun = {}
    fun.set_stuff = set_stuff
    fun.set_stuff("Hello")
    expect (fun.stuff).toBe("HelloStuff!")
  })

  it("this should apply on a nested object", function() {
    superduper = {
      fun: {
        set_stuff: set_stuff
      }
    }
    superduper.fun.set_stuff("Nested")
    expect(superduper.fun.stuff).toBe("NestedStuff!")
  })

  it("apply should allow you to customize this", function() {
    todd = {
        stuff: "electronic"
    }
    set_stuff.apply(todd, ["Applied"])
    expect(todd.stuff).toBe("AppliedStuff!")
  })

  it("call should allow you to customize this without an array", function() {
    justin = {
        stuff: "Apple"
    }
    set_stuff.call(justin, "Called")
    expect(justin.stuff).toBe("CalledStuff!")
  })

  it("call and apply can let you borrow an object's methods", function() {
    cat = {
      means: "sharp claws",
      attack: function(means) {
        return means + " attack!"
      }
    }
    expect(cat.attack(cat.means)).toBe("sharp claws attack!")
    dog = {}
    result = cat.attack.apply(dog, ["viscious fangs"])
    expect(result).toBe("viscious fangs attack!")
  })

  it("Constructors are just a way of setting and returning context to an object", function() {
    Widget = set_stuff
    roundie = new Widget("Round")
    boxie = new Widget("Square")
    expect(roundie.stuff).toBe("RoundStuff!")
    expect(boxie.stuff).toBe("SquareStuff!")
  })
});
