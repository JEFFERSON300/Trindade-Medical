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

function SideBarComponent() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "400px",
      }}
    >
      <Sidebar
        className="sidebar"
        collapsed={collapsed}
        width={"250px"}
        collapsedWidth={"80px"}
        backgroundColor="#F8F9FA"
      >
        <Menu>
          <MenuItem
            style={{ color: "gray", marginTop: "15px" }}
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
            <MenuItem component={<Link to="/" />} icon={<AiFillSignal />}>
              {" "}
              Inicio{" "}
            </MenuItem>
            <MenuItem
              component={<Link to="/login" />}
              icon={<AiOutlineLogout />}
            >
              {" "}
              Sair{" "}
            </MenuItem>
          </div>

          <div>
            <MenuItem style={{ color: "gray" }} disabled={true}>
              {" "}
              Pacientes{" "}
            </MenuItem>
            <MenuItem
              component={<Link to="/patients" />}
              icon={<AiOutlinePlusSquare />}
            >
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
            <MenuItem
              component={<Link to="/consults" />}
              icon={<AiOutlinePlusSquare />}
            >
              Cadastrar Consulta
            </MenuItem>
            <MenuItem
              component={<Link to="/exams" />}
              icon={<AiOutlinePlusSquare />}
            >
              Cadastrar Exame
            </MenuItem>
          </div>

          <div
            style={{ marginTop: "20rem" }}
            onClick={() => setCollapsed(!collapsed)}
          >
            <SwitchButtonComponent />
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBarComponent;
