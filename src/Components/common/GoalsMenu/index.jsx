import React, { useState } from 'react';
import {
  Menu,
  CatalogLogo,
  Union,
  MaskGroup,
  Wrapper,
  MenuBadge,
  MenuContent,
} from './styled';
import CatalogLogoSvg from './svg/CatalogLogo.svg';
import UnionSvg from './svg/Union.svg';
import MaskGroupSvg from './svg/MaskGroup.svg';

function GoalsMenu() {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <Menu visible={visible} onClick={() => setVisible(false)}>
        <MenuContent onClick={e => e.stopPropagation()}>
          <CatalogLogo src={CatalogLogoSvg} alt="" />
          <Union src={UnionSvg} alt="" />
          <MaskGroup src={MaskGroupSvg} alt="" />
        </MenuContent>
      </Menu>
      <MenuBadge
        visible={visible}
        onClick={() => {
          setVisible(true);
        }}
      />
    </Wrapper>
  );
}

export default GoalsMenu;
