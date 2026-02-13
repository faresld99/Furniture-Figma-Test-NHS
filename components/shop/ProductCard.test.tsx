import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "./ProductCard";

const mockProduct = {
  name: "Sakarias Armchair",
  price: "$ 392",
  image: "/assets/products/chair-1.png",
};

describe("ProductCard", () => {
  it("affiche le nom, le prix et la catégorie du produit", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("Sakarias Armchair")).toBeInTheDocument();
    expect(screen.getByText("392")).toBeInTheDocument();
    expect(screen.getByText("Chair")).toBeInTheDocument();
  });

  it("affiche le bouton d'ajout au panier avec le bon aria-label", () => {
    render(<ProductCard product={mockProduct} />);
    const button = screen.getByRole("button", { name: /ajouter au panier/i });
    expect(button).toBeInTheDocument();
  });

  it("affiche le prix formaté avec le symbole $", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText("392")).toBeInTheDocument();
    expect(document.body.textContent).toMatch(/\$/);
  });

  it("affiche 5 étoiles", () => {
    render(<ProductCard product={mockProduct} />);
    const stars = screen.getAllByText("★");
    expect(stars).toHaveLength(5);
  });
});
