import {
  CATEGORIES,
  PRODUCTS,
  NAV_LINKS,
  FOOTER_SERVICES,
  FOOTER_FURNITURE,
} from "./index";

describe("lib/constants", () => {
  it("CATEGORIES contient les 4 catégories attendues", () => {
    expect(CATEGORIES).toEqual(["Chair", "Beds", "Sofa", "Lamp"]);
  });

  it("PRODUCTS contient au moins un produit avec name et price", () => {
    expect(PRODUCTS.length).toBeGreaterThan(0);
    expect(PRODUCTS[0]).toHaveProperty("name");
    expect(PRODUCTS[0]).toHaveProperty("price");
    expect(PRODUCTS[0]).toHaveProperty("image");
  });

  it("NAV_LINKS contient les liens de navigation", () => {
    expect(NAV_LINKS).toContain("Furniture");
    expect(NAV_LINKS).toContain("Shop");
  });

  it("FOOTER_SERVICES et FOOTER_FURNITURE sont définis", () => {
    expect(FOOTER_SERVICES.length).toBeGreaterThan(0);
    expect(FOOTER_FURNITURE).toContain("Beds");
    expect(FOOTER_FURNITURE).toContain("Chair");
    expect(FOOTER_FURNITURE).toContain("All");
  });
});
