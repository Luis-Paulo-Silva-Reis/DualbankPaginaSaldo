import React from "react";
import "./saldo.css";
import Header from "./Header/Header";
import Frame1875 from "./Frame1875/Frame1875";
import Frame1874 from "./Frame1874/Frame1874";
import SearchBar from "./Search Bar/SearchBar";
import Icons from "./icons/Icons";
import RightMenu from "./rightMenu/rightMenu";
import Logo from "./Logo/Logo";
import MenuLateral from "./MenuLateral/MenuLateral";
import Frame1886 from "./Frame1886/Frame1886";
import Title from "./Title/Title";
import InputField1 from "./InputField1/InputField1";
import InputField2 from "./InputField2/InputField2";
import Group1539 from "./Group1539/Group1539";

function bank() {
  return (
    <div>
      <Header />
      <Frame1875 />
      <Frame1874 />
      <SearchBar />
      <Icons />
      <RightMenu />
      <Logo />

      <MenuLateral />
      <Frame1886 />

      <Title />
      <InputField1 />
      <Group1539 />
      <InputField2 />
    </div>
  );
}

export default bank;
