import styled from "styled-components";

export const Section = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  margin: 25vh 0;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  position: relative;
`;
export const InputGroup = styled.div``;

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
  vertical-align: bottom;
`;

export const InputElement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.legend`
  color: #5281dc;
  font-family: Segoe UI;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;
`;

export const Subtitle = styled.p`
  color: rgba(105, 105, 105, 0.93);
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
`;

export const EsqueciSenha = styled.a`
  text-decoration: none;
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
