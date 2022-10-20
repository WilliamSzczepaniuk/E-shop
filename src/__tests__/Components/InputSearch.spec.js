import { render, screen } from "@testing-library/react";
import React from "react";
import { InputSearch } from "../../Components/Header/InputSearch";
describe("InputSearch Component", () => {
  test("InputSearch", () => {
    render(<InputSearch />);
    expect(screen.getByPlaceholderText("Search...")).toBeTruthy();
  });
});
