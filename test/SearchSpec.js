import React from "react";
import ReactTestUtils from "react/lib/ReactTestUtils";
import assert from "assert";

import Search from "../src/Components/lib/Search";

describe("Search", function () {
	it("should exist in the dom", function () {
		let instance = ReactTestUtils.renderIntoDocument(
			<Search />
		);
		assert.ok(ReactTestUtils.findRenderedDOMComponentWithClass(instance, "input-search"));
	});
});
