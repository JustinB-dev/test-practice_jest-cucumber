import { defineFeature, loadFeature } from "jest-cucumber";
import React from "react";
import TestRenderer from "react-test-renderer";
import Counter from "../../Components/sum.component";

const feature = loadFeature("./src/features/sum_a_pair.feature");
window.alert = jest.fn();

defineFeature(feature, test => {
  let testInstance = TestRenderer.ReactTestInstance;

  beforeEach(() => {
    const testRenderer = TestRenderer.create(<Counter />);
    testInstance = testRenderer.root;
  });
  const givenMountCounter = given => {
    given("mount counter", () => {
      // Counter Mounted in beforeEach().
    });
  };

  test("showing 0 initially", ({ given, when, then }) => {
    givenMountCounter(given);

    when("initial load", () => {
      // Iinital Load
    });

    then("show 0", () => {
      const divInstance = testInstance.findByType("h1");
      expect(divInstance.props.children).toBe(0);
    });
  });

  test("clicking button increments", ({ given, when, then }) => {
    givenMountCounter(given);

    when("clicking button", () => {
      const buttonInstance = testInstance.findByProps({ children: "Click Me" });
      buttonInstance.props.onClick();
    });

    then("show +1", () => {
      const divInstance = testInstance.findByType("h1");
      expect(divInstance.props.children).toBe(1);
    });
  });

  test("counter resets to 0 after 10", ({ given, when, then }) => {
    given("counter is equal to 10", table => {
      const buttonInstance = testInstance.findByProps({ children: "Click Me" });
      table.forEach(row => buttonInstance.props.onClick());
    });

    when("clicking button", () => {
      const buttonInstance = testInstance.findByProps({ children: "Click Me" });
      buttonInstance.props.onClick();
    });

    then('alert', () =>{
      expect(window.alert).toBeCalled();
    });

    then("counter resets", () => {
      const divInstance = testInstance.findByType("h1");
      expect(divInstance.props.children).toBe(0);
    });
  });
});
