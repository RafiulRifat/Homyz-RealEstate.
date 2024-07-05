import React from "react";
import { useNavigate } from "react-router-dom";

import { Menu } from "@mantine/core";
const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu>
      <Menu.Target>
        <Avatar src={user?.picture} alt="user image" radius={"xl"} />
      </Menu.Target>

      <MenuItem.Dropdown>
        <Menu.Item>Favourites</Menu.Item>
      </MenuItem.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
