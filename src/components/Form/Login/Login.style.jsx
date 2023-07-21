import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20vh 0;
`;
export const Header = styled.div`
  text-align: start;
`;

export const Title = styled.legend`
  color: #0d6efd;
  font-family: Segoe UI;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  min-width: 500px;
`;

export const InputGroup = styled.div`
  margin-bottom: 50px;
  margin-top: 30px;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const ActionTitle = styled.p`
  color: rgba(105, 105, 105, 0.93);
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputElement = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 10px 0;
`;

export const Subtitle = styled.p`
  color: rgba(105, 105, 105, 0.93);
  font-family: Segoe UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
`;

export const EsqueciSenha = styled.a`
  text-decoration: none;
  margin-top: 20px;
`;

export const Control = styled.input`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #5281dc;
  min-width: 500px;
`;
