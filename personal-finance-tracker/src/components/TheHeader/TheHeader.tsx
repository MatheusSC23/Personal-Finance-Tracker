"use client";
import logoPath from "@/assets/images";
import * as S from "./TheHeader.style";
import Image from "next/image";

export const TheHeader = () => {
  return (
    <S.HeaderContainer className="header">
      <Image src={logoPath} alt="logo" width={60} height={60} />
    </S.HeaderContainer>
  );
};
