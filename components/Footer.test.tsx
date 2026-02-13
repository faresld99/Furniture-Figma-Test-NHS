import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("affiche le logo Panto", () => {
    render(<Footer />);
    expect(screen.getByRole("heading", { name: /panto/i })).toBeInTheDocument();
  });

  it("affiche les colonnes Services, Furniture et Follow Us", () => {
    render(<Footer />);
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Furniture")).toBeInTheDocument();
    expect(screen.getByText("Follow Us")).toBeInTheDocument();
  });

  it("affiche les liens Services (Email Marketing, Campaigns, Branding)", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Email Marketing" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Campaigns" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Branding" })).toBeInTheDocument();
  });

  it("affiche les liens Furniture (Beds, Chair, All)", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Beds" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Chair" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "All" })).toBeInTheDocument();
  });

  it("affiche Copyright avec l'année courante", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`Copyright.*${year}`))).toBeInTheDocument();
  });

  it("affiche Terms & Conditions et Privacy Policy", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /terms/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /privacy/i })).toBeInTheDocument();
  });
});
