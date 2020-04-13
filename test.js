const test = require("ava")
const totalled = require(".")

test("main", t => {
	t.is(totalled([1, 2, 3]), 6)
})
