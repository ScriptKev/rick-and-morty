import BgHeader from "components/BgHeader";
import { NotFoundStyled } from "layouts/NotFound";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <NotFoundStyled.Container>
      <BgHeader />
      <NotFoundStyled.Message>
        <span>404 Not Found</span> <br />
        Return to <Link to='/'>Home</Link>
      </NotFoundStyled.Message>
    </NotFoundStyled.Container>
  )
}
