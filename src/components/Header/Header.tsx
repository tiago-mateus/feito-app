import {StyledHeader} from './styles'
import logoDark from '../../assets/logo-dark.svg';
export function Header(){
    return (
    <StyledHeader>
        <img src={logoDark} alt="" />
        <hr />
    </StyledHeader>
    )
}