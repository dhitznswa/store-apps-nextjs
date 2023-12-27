import HeaderLanding from "@/components/HeaderLanding";
import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductsList";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="px-4">
          <Navbar />
          <HeaderLanding />
          <ProductsList />
        </div>
      </div>
    </>
  );
}
