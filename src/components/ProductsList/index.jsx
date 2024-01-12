"use client";
import { Button } from "primereact/button";
import { useRef, useState } from "react";
import Products from "./products";
import { Divider } from "primereact/divider";

export default function ProductsList() {
  const [listActive, setListActive] = useState("Products");
  return (
    <div className="mt-10">
      <div className="flex gap-4">
        <Button
          label="Products"
          size="small"
          raised
          onClick={() => setListActive("Products")}
        />
        <Button
          label="Services"
          size="small"
          raised
          severity="danger"
          onClick={() => setListActive("Services")}
        />
      </div>
      <Divider>
        <span className="p-tag tracking-wider">{listActive}</span>
      </Divider>
      <div className="mt-4">
        <Products />
      </div>
    </div>
  );
}
