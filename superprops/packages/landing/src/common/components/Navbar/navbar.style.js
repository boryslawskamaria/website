import styled from 'styled-components'
import {
  display,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  boxShadow,
  color,
  space,
  borderRadius,
  width,
  height,
} from 'styled-system'

const NavbarStyle = styled.nav`
  /* Navbar default style goes here */
  background: linear-gradient(94.45deg, #F5F6F7 14.71%, #f7f4fa 95.01%);
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 10px 16px;

  /* Style system supported prop */
  ${display}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${flexWrap}
  ${width}
  ${height}
  ${color}
  ${space}
  ${boxShadow}
  ${borderRadius}
`

NavbarStyle.displayName = 'NavbarStyle'

export default NavbarStyle
