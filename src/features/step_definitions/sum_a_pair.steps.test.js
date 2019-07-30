import { defineFeature, loadFeature } from "jest-cucumber";
import React from "react";
import TestRenderer from "react-test-renderer";
import Counter from "../../Components/sum.component";

const feature = loadFeature("./src/features/sum_a_pair.feature");

defineFeature(feature, test => {
  test("showing 0 initially", ({ given, when, then }) => {
    let testInstance = TestRenderer.ReactTestInstance;

    given("mount counter", () => {
      const testRenderer = TestRenderer.create(<Counter />);
      testInstance = testRenderer.root;
    });
    
    when("initial load", () => {
      // INITIAL LOAD
    });
    
    then("show 0", () => {
      const divInstance = testInstance.findByType('h1');
      expect(divInstance.props.children).toBe(0);
    });
  });
  
  test("clicking button increments", ({ given, when, then }) => {
    let testInstance = TestRenderer.ReactTestInstance;
    
    given("mount counter", () => {
      const testRenderer = TestRenderer.create(<Counter />);
      testInstance = testRenderer.root;
    });

    when("clicking button", () => {
      const buttonInstance = testInstance.findByProps({children: 'Click Me'})
      buttonInstance.props.onClick();
    });

    then("show +1", () => {
      const divInstance = testInstance.findByType('h1');
      expect(divInstance.props.children).toBe(1);
    });
  });
});