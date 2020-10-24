import './SidebarMenu.css';

import React from 'react';

type SidebarMenuPropsType = {};

const SidebarMenu = (props: SidebarMenuPropsType) => {
  return (
    <nav id="sidebar-menu">
      <div className="menu-item">Today</div>
      <div className="menu-item">Calendar</div>
      <div className="menu-item">Routines</div>
      <div className="menu-item">Tasks</div>
    </nav>
  );
};

export default SidebarMenu;
