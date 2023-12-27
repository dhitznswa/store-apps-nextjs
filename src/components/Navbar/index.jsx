"use client";

import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Chip } from "primereact/chip";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import React, { useState } from "react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const items = [
    {
      label: "Beranda",
      url: "/",
    },
    {
      label: "Category",
      url: "/category",
    },
    {
      label: "Contact",
      items: [
        {
          label: "WhatsApp",
          icon: "fa-brands fa-whatsapp",
        },
      ],
    },
  ];

  const start = (
    <div className="mr-4">
      <h1 className="text-xl font-bold">dtoolify</h1>
    </div>
  );

  const end = (
    <div className="flex gap-5 items-center w-2/3">
      <div className="">
        <i
          className="fa-light fa-search "
          onClick={(e) => setSearchOpen(!searchOpen)}
        />
      </div>
      <div className="">
        <i className="fa-light fa-envelope p-overlay-badge ">
          <Badge severity="danger" className="top-1" />
        </i>
      </div>
      <div className="">
        <Chip label="Guest" icon="fa-regular fa-user" className="text-sm" />
      </div>
    </div>
  );

  return (
    <>
      <Menubar
        model={items}
        start={start}
        end={end}
        className="w-full border-none text-sm flex items-center py-3"
      />
    </>
  );
}
