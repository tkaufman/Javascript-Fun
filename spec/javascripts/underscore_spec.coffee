describe "underscore ", ->

  numArray = [1,2,3]
  letterArray = ['A','B','C']
  numObject = one: 1, two: 2, three: 3

  describe "each", ->
    it "should deal with empty arrays", ->
      sum = 0
      _.each([], (num) -> sum += num)
      expect(sum).toBe(0)

    it "should iterate over elements", ->
      sum = 0
      _.each(numArray, (num) -> sum += num)
      expect(sum).toBe(6)

    it "should provide an index", ->
      sum = 0
      _.each(numArray, (num, index) -> sum += num if index > 1)
      expect(sum).toBe(3)

  describe "map", ->
    it "should deal with empty arrays", ->
      expect(_.map([], (num) -> num*2)).toEqual([])

    it "should transform array elements", ->
      doubledArray = _.map(numArray, (num) -> num*2)
      expect(doubledArray).toEqual([2,4,6])

    it "should transform pull out values from an object literal", ->
      doubledArray = _.map(numObject, (num) -> num*2)
      expect(doubledArray).toEqual([2,4,6])

  describe "reduce", ->
    it "should return the memo with empty arrays", ->
      result = _.reduce(
        [],
        (memo, num) -> 3,
        0)
      expect(result).toEqual(0)

    it "should perform a function on array elements", ->
      factorial = _.reduce(
        numArray,
        (memo, num) -> num*memo,
        1
      )
      expect(factorial).toEqual(6)

  describe "reduce right", ->
    it "should return the memo with empty arrays", ->
      result = _.reduceRight(
        [],
        (memo, num) -> 7,
        0)
      expect(result).toEqual(0)

    it "should perform a function on array elements", ->
      result = _.reduceRight(
        letterArray,
        (memo, ltr) -> memo+ltr,
        "D"
      )
      expect(result).toEqual("DCBA")

  describe "find", ->
    it "should return nothing on empty arrays", ->
      result = _.find([], (val) -> true)
      expect(result).not.toBeDefined()

    it "should return the first match", ->
      result = _.find(numArray, (num) -> num > 1)
      expect(result).toEqual(2)

    it "should return undefined on no matches", ->
      result = _.find(numArray, (num) -> num > 534)
      expect(result).not.toBeDefined()

  describe "filter", ->
    it "should return an empty array with an empty array", ->
      result = _.filter([], -> true)
      expect(result).toEqual([])

    it "should return an empty array with no matches", ->
      result = _.filter(numArray, (num) -> num > 432)
      expect(result).toEqual([])

    it "should return all matching results in an array", ->
      result = _.filter(numArray, (num) -> num > 1)
      expect(result).toEqual([2,3])

    it "should return single results in an array", ->
      result = _.filter(numArray, (num) -> num > 2)
      expect(result).toEqual([3])

  describe "reject", ->
    it "should return an empty array with an empty array", ->
      result = _.reject([], -> true)
      expect(result).toEqual([])

    it "should return an empty array with total rejection", ->
      result = _.reject(numArray, -> true)
      expect(result).toEqual([])

    it "should return the original array with nary a rejection", ->
      result = _.reject(numArray, -> false)
      expect(result).toEqual(numArray)

    it "should remove the rejects", ->
      result = _.reject(numArray, (num) -> num % 2 == 0)
      expect(result).toEqual([1,3])

  describe "all", ->
    it "should return true on an empty array", ->
      result = _.all([], -> false)
      expect(result).toBe(true)

    it "should return false on partial matches", ->
      result = _.all(numArray, (num) -> num > 1)
      expect(result).toBe(false)

    it "should return true on full matches", ->
      result = _.all(numArray, (num) -> num > 0)
      expect(result).toBe(true)

  describe "any", ->
    it "should return false on an empty array", ->
      result = _.any([], -> true)
      expect(result).toBe(false)

    it "should return true on partial matches", ->
      result = _.any(numArray, (num) -> num > 1)
      expect(result).toBe(true)

    it "should return false on no matches", ->
      result = _.any(numArray, (num) -> num > 154)
      expect(result).toBe(false)

