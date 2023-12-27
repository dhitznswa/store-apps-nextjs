"use client";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import Products from "./products";
import { Divider } from "primereact/divider";

export default function ProductsList() {
  const [listActive, setListActive] = useState("product");
  return (
    <div className="mt-10">
      <div className="flex gap-4">
        <Button
          label="Products"
          size="small"
          className="tracking-wider"
          raised
          text
          onClick={(e) => setListActive("product")}
        />
        <Button
          label="Services"
          size="small"
          className="tracking-wider"
          raised
          text
          onClick={(e) => setListActive("service")}
        />
      </div>
      <Divider />
      <div className="mt-4">
        <Products />
      </div>
    </div>
  );
}
