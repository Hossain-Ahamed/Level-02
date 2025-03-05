import { MenuProps } from "antd";
import { TSidebarItem, TUserPath } from "../types";
import { NavLink } from "react-router";

export const generateSidebarItems = (items: TUserPath[],role :string) :  MenuProps["items"]  => {
  const SidebarItems = items.reduce(
    (acc: TSidebarItem[], item) => {
      if (item.name && item.path) {
        acc.push({
          key: item.name,
          label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
        });
      }

      if (item.children) {
        acc.push({
          key: item.name,
          label: item.name,
          children: item.children.map((child) => ({
            key: child.name,
            label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
          })),
        });
      }

      return acc;
    },
    []
  );

  return SidebarItems;
};
