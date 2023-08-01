import * as Styled from "./Switch.style";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export const SwitchButtonComponent = () => {
  return (
    <Styled.Header>
      <BootstrapSwitchButton
        checked={true}
        size="sm"
        onstyle="primary"
        style="border"
        width={50}
        height={25}
      />
    </Styled.Header>
  );
};
