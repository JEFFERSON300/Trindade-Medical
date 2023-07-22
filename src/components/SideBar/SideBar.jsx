import { SwitchButtonComponent } from "../SwitchButton/SwitchButton.component";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiFillSignal,
  AiOutlineLogout,
  AiOutlinePlusSquare,
  AiOutlineUnorderedList,
} from "react-icons/ai";

function Side() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",

        minHeight: "400px",
      }}
    >
      <Sidebar
        className="sidebar"
        collapsed={collapsed}
        width={"275px"}
        collapsedWidth={"80px"}
      >
        <Menu>
          <MenuItem
            style={{ color: "gray" }}
            icon={<AiOutlineUnorderedList />}
            disabled={true}
          >
            <h5>Trindade Medical</h5>
          </MenuItem>

          <div style={{ margin: "40px 0 0 0" }}>
            <MenuItem style={{ color: "gray" }} disabled={true}>
              {" "}
              Geral{" "}
            </MenuItem>
            <MenuItem component={<Link to="/home" />} icon={<AiFillSignal />}>
              {" "}
              Inicio{" "}
            </MenuItem>
            <MenuItem component={<Link to="/" />} icon={<AiOutlineLogout />}>
              {" "}
              Sair{" "}
            </MenuItem>
          </div>

          <div>
            <MenuItem style={{ color: "gray" }} disabled={true}>
              {" "}
              Pacientes{" "}
            </MenuItem>
            <MenuItem component={<Link to="" />} icon={<AiOutlinePlusSquare />}>
              {" "}
              Cadastrar{" "}
            </MenuItem>
            <MenuItem
              component={<Link to="" />}
              icon={<AiOutlineUnorderedList />}
            >
              Listar Prontuário
            </MenuItem>
          </div>

          <div>
            <MenuItem style={{ color: "gray" }} disabled={true}>
              {" "}
              Exames{" "}
            </MenuItem>
            <MenuItem component={<Link to="" />} icon={<AiOutlinePlusSquare />}>
              Cadastrar Consulta
            </MenuItem>
            <MenuItem component={<Link to="" />} icon={<AiOutlinePlusSquare />}>
              Cadastrar Exame
            </MenuItem>
          </div>

          <div onClick={() => setCollapsed(!collapsed)}>
            <SwitchButtonComponent />
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Side;
