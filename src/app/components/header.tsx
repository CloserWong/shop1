"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import LoginModal from "./LoginModal";


export default function Header() {
  const navItems = [
    { label: "Главная", href: "/" },
    { label: "Каталог", href: "/catalog" },
    { label: "Контакты", href: "/contacts" },
  ];

  return (
    <Navbar>
      <NavbarBrand>
      
        <p className="font-bold text-inherit ml-2">Магазин</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link href={item.href} color="foreground">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <LoginModal /> {/* ← здесь кнопка + модалка */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
