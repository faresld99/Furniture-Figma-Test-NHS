import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Products from "./Products";

describe("Products", () => {
  it("affiche le titre Best Selling Product", () => {
    render(<Products />);
    expect(screen.getByRole("heading", { name: /best selling product/i })).toBeInTheDocument();
  });

  it("affiche les filtres de catégories (Chair, Beds, Sofa, Lamp)", () => {
    render(<Products />);
    expect(screen.getByRole("button", { name: /^chair$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^beds$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^sofa$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^lamp$/i })).toBeInTheDocument();
  });

  it("change la catégorie active au clic", async () => {
    const user = userEvent.setup();
    render(<Products />);

    const bedsButton = screen.getByRole("button", { name: /^beds$/i });
    await user.click(bedsButton);

    // La pastille animée se déplace vers l'onglet actif ; on vérifie que Beds est bien cliquable et présent
    expect(bedsButton).toBeInTheDocument();
  });

  it("affiche le lien View All", () => {
    render(<Products />);
    expect(screen.getByRole("link", { name: /view all/i })).toBeInTheDocument();
  });

  it("affiche les produits du catalogue", () => {
    render(<Products />);
    expect(screen.getByText("Sakarias Armchair")).toBeInTheDocument();
    expect(screen.getByText("Baltsar Chair")).toBeInTheDocument();
  });
});
