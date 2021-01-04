import { Link } from 'react-router-dom'
import AppIcon from './AppIcon'
import { NavBarStyled } from './styled'

export default function NavBar() {
  return (
    <NavBarStyled.Container>
      <NavBarStyled.Item>
        <Link to='/'>
          <AppIcon />
        </Link>
      </NavBarStyled.Item>
    </NavBarStyled.Container>
  )
}
