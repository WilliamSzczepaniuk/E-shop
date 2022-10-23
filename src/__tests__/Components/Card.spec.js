import { render, screen } from "@testing-library/react";
import React from "react";
import { CardComponent } from "../../Components/Card";

describe("Testing Card Component", () => {
  it("should be able to render a Card", () => {
    render(
      <CardComponent
        product={{
          image: "https://www.toyshow.com.br/mkp/teste",
          title: "test",
          price: "1999",
        }}
        cartItem={false}
      />
    );
  });
  const titulo = screen.getByText("test");
  expect(titulo).toBeInTheDocument();
});
