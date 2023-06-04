import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.ul`
  all: unset;
  
  display: flex;
  gap: 10px;
  
  margin-bottom: 20px;
  
  & > li {
    all: unset;
  }
`;

const Header = () => {
    const navigate = useNavigate();

    const handleClickButton = (path: string) => {
        navigate(path);
    }

    return (
        <HeaderContainer>
            <li>
                <button onClick={() => handleClickButton("admin/product/create")}>Create Product Page</button>
            </li>
            <li>
                <button onClick={() => handleClickButton("product/list")}>Product List Page</button>
            </li>
            <li>
                <button onClick={() => handleClickButton("product/1")}>Product Detail Page</button>
            </li>
            <li>
                <button onClick={() => handleClickButton("cart")}>CartPage Detail Page</button>
            </li>
        </HeaderContainer>
    )
};


export default Header;