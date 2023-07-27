import { number } from "prop-types";
import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;
export const Input = styled.input`
  display: flex;
  padding: 7px;
  align-items: flex-start;
  align-self: stretch;
  min-width: 100%;
  border-radius: 5px;
`;
export const TextArea = styled.textarea`
  flex: 1 0 0;
  color: #aaa;
  font-family: Segoe UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Icon = styled.button`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  cursor: pointer;
  background: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
`;

export const InputSelect = styled.select`
  display: flex;
  padding: 7px;
  align-items: flex-start;
  align-self: stretch;
  min-width: 100px;
  border-radius: 5px;
`;
