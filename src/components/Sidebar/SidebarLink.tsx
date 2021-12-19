import React, { FC } from 'react';
import { SidebarItem } from '../../models/SidebarItem';

type SidebarLinkProps = {
  item: SidebarItem;
};

const SidebarLink: FC<SidebarLinkProps> = ({item})=>{
  return <>{item.title}</>;
};

export default SidebarLink;