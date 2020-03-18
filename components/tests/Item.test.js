import React from "react";
import renderer from "react-test-renderer";

import Item from "../common/Item";

it(`renders correctly`, () => {
    const tree = renderer.create(
        <Item id='1' text='test' pressed='false' onPress={() => {}}>Snapshot test!</Item>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

it(`changes color when pressed`, () => {
    const tree = renderer.create(
        <Item id='1' text='test' pressed='true' onPress={() => {}}>Snapshot test!</Item>
    ).toJSON();
    const [_, {backgroundColor}] = tree.props.style;
    expect(backgroundColor === "#FD7F4A").toEqual(true);
});