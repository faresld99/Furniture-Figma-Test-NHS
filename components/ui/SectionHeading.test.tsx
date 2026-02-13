import { render, screen } from "@testing-library/react";
import SectionHeading from "./SectionHeading";

describe("SectionHeading", () => {
  it("affiche le label et le titre", () => {
    render(<SectionHeading label="Testimonials" title="Our Client Reviews" />);
    expect(screen.getByText("Testimonials")).toBeInTheDocument();
    expect(screen.getByText("Our Client Reviews")).toBeInTheDocument();
  });

  it("applique le bon formatage au label (uppercase)", () => {
    render(<SectionHeading label="Products" title="Best Selling" />);
    const label = screen.getByText("Products");
    expect(label).toHaveClass("uppercase");
  });
});
