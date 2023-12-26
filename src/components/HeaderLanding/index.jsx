import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import React from "react";

export default function HeaderLanding() {
  return (
    <div className="w-full h-full min-h-[60vh] mt-5">
      <div className="w-full h-full flex flex-wrap items-center justify-between border border-slate-200 shadow-md rounded-lg px-6 py-10">
        <div className="header__text w-full md:w-1/2 text-center md:text-left order-last md:order-first">
          <h1 className="text-3xl font-bold">
            Online Store For{" "}
            <span className="text-[var(--primary-color)]">Everyone</span>
          </h1>
          <h2 className="text-2xl font-light">Shopping with enjoyment</h2>
          <div className="mt-6 w-full">
            <div className="w-[70%] px-5 py-2 border border-slate-300 rounded-full flex items-center mx-auto md:mx-0">
              <div className="input__icon">
                <i className="fa-regular fa-search"></i>
              </div>
              <div className="input__box">
                <input
                  type="text"
                  className="px-3 py-1 outline-none"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="header__image w-full md:w-1/2 order-first md:order-last">
          <img
            src="/Illustrations/Scenes/HeaderLandingImage.svg"
            alt="HeaderLandingImage"
            className="w-full"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}
