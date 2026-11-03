import NavBar from "../components/NavBar";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}