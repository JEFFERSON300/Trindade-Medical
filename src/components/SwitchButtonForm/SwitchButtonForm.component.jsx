import * as Styled from "../SwitchButton/Switch.style";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import PropTypes from "prop-types";

export const SwitchButtonFormComponent = ({active, check}) => {
  return (
    <Styled.Header>
      <BootstrapSwitchButton
        disabled={!active}
        checked={check}
        size="sm"
        onlabel="Editar On"
        offlabel="Editar Off"
        onstyle="primary"
        style="border"
        width={100}
        height={25}
      />
    </Styled.Header>
  );
};

SwitchButtonFormComponent.propTypes ={
  active: PropTypes.bool,
  check: PropTypes.bool,
}