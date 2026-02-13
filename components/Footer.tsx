import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FOOTER_SERVICES, FOOTER_FURNITURE } from "@/lib/constants";

const footerLinkClass = "font-gilroy font-medium text-[15px] leading-[160%] text-token opacity-80 hover:opacity-100 transition-opacity";

// Colonne réutilisable (Services, Furniture, Follow Us)
function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 font-dm-sans font-normal text-[17px] leading-[22px] tracking-[-0.231818px] text-accent-alt">
        {title}
      </h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

// Pied de page : logo, texte, colonnes de liens, réseaux sociaux, copyright
export default function Footer() {
  return (
    <footer className="relative w-full font-gilroy min-h-[462px] bg-token">
      <div
        className="mx-auto flex flex-col md:flex-row md:justify-between gap-12 md:gap-8 pt-[118px] pb-16 px-6 md:px-[188px]"
        style={{ maxWidth: 1064 + 376 }}
      >
        <div className="max-w-[300px]">
          <h2 className="font-bold mb-4 typo-h1 tracking-[0.01em] capitalize text-token">
            Panto
          </h2>
          <p className="font-gilroy font-medium text-[15px] leading-[160%] text-token opacity-80">
            The advantage of hiring a workspace with us is that givees you comfortable service and
            all-around facilities.
          </p>
        </div>

        <FooterColumn title="Services">
          {FOOTER_SERVICES.map((item) => (
            <li key={item}>
              <Link href="#" className={footerLinkClass}>
                {item}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Furniture">
          {FOOTER_FURNITURE.map((item) => (
            <li key={item}>
              <Link href="#" className={footerLinkClass}>
                {item}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Follow Us">
          <li>
            <a href="#" className={`inline-flex items-center gap-2 ${footerLinkClass}`}>
              <FaFacebookF style={{ color: "var(--color-icon-dark)", width: 10, height: 20 }} />
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className={`inline-flex items-center gap-2 ${footerLinkClass}`}>
              <FaTwitter style={{ color: "var(--color-icon-dark)", width: 20, height: 16 }} />
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className={`inline-flex items-center gap-2 ${footerLinkClass}`}>
              <FaInstagram style={{ color: "var(--color-icon-dark)", width: 20, height: 20 }} />
              Instagram
            </a>
          </li>
        </FooterColumn>
      </div>

      <div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-6 md:px-[188px] pb-6"
        style={{ maxWidth: 1064 + 376, margin: "0 auto" }}
      >
        <p className="font-dm-sans font-normal text-[15px] leading-[20px] tracking-[-0.204545px] opacity-50" style={{ color: "var(--color-copyright)" }}>
          Copyright © {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          <Link href="#" className={footerLinkClass}>
            Terms &amp; Conditions
          </Link>
          <Link href="#" className={footerLinkClass}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
