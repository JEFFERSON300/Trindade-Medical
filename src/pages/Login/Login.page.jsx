import { FormLoginComponent } from "../../components/Form/Login/Login.component";
import * as Styled from "./Login.style";

export const LoginPage = () => {
  return (
    <Styled.Login>
      <Styled.LoginLeft>
        <Styled.Img src="/login.jpg" alt="" width="500px" />
      </Styled.LoginLeft>

      <Styled.LoginRigth>
        <FormLoginComponent />
      </Styled.LoginRigth>
    </Styled.Login>
  );
};
