import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("affiche le logo Panto", () => {
    render(<Navbar />);
    expect(screen.getByRole("heading", { name: /panto/i })).toBeInTheDocument();
  });

  it("affiche les liens de navigation", () => {
    render(<Navbar />);
    expect(screen.getByText("Furniture")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("affiche le bouton hamburger sur mobile (sm:hidden)", () => {
    render(<Navbar />);
    const hamburger = screen.getByRole("button", {
      name: /ouvrir le menu/i,
    });
    expect(hamburger).toBeInTheDocument();
  });

  it("ouvre et ferme le menu mobile au clic sur le hamburger", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const hamburger = screen.getByRole("button", {
      name: /ouvrir le menu/i,
    });

    await user.click(hamburger);
    expect(screen.getByRole("button", { name: /fermer le menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /fermer le menu/i }));
    expect(screen.getByRole("button", { name: /ouvrir le menu/i })).toBeInTheDocument();
  });
});
