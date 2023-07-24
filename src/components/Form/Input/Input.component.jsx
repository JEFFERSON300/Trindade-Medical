import { PropTypes } from "prop-types";
import * as Styled from "./Input.styled";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const InputComponent = ({ label, type, id, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.InputGroup>
      <Styled.Label htmlFor="{id}">{label}</Styled.Label>
      {type !== "textarea" && (
        <div>
          <Styled.InputContainer>
            <Styled.Input
              type={showPassword ? "text" : type}
              id={id}
              placeholder={placeholder}
              className="Input"
            />
            {type === "password" && (
              <Styled.Icon type="button" onClick={handleShowPassword}>
                {!showPassword ? (
                  <AiFillEye size={"20px"} />
                ) : (
                  <AiFillEyeInvisible size={"20px"} />
                )}
              </Styled.Icon>
            )}
          </Styled.InputContainer>
        </div>
      )}

      {type === "textarea" && (
        <Styled.TextArea
          className="TextArea"
          id={id}
          placeholder={placeholder}
        />
      )}
    </Styled.InputGroup>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
