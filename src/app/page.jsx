import HeaderLanding from "@/components/HeaderLanding";
import Navbar from "@/components/Navbar";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="px-4">
          <Navbar />
          <HeaderLanding />
        </div>
      </div>
    </>
  );
}
