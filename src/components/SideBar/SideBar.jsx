import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  AiFillSignal,
  AiOutlineLogout,
  AiOutlinePlusSquare,
  AiOutlineUnorderedList,
} from "react-icons/ai";

function Side() {
  return (
    <div style={{ display: "flex", height: "100vh", color: "white" }}>
      <Sidebar backgroundColor="#0D6EFD" className="sidebar">
        <Menu>
          <MenuItem disabled={true}>
            <h4>Trindade Medical</h4>
          </MenuItem>

          <div style={{ margin: "60px 0 0 0" }}>
            <MenuItem disabled={true}> Geral </MenuItem>
            <MenuItem icon={<AiFillSignal />}> Inicio </MenuItem>
            <MenuItem icon={<AiOutlineLogout />}> Sair </MenuItem>
          </div>

          <div>
            <MenuItem disabled={true}> Pacientes </MenuItem>
            <MenuItem icon={<AiOutlinePlusSquare />}> Cadastrar </MenuItem>
            <MenuItem icon={<AiOutlineUnorderedList />}>
              Listar Prontuário
            </MenuItem>
          </div>

          <div>
            <MenuItem disabled={true}> Exames </MenuItem>
            <MenuItem icon={<AiOutlinePlusSquare />}>
              Cadastrar Consulta
            </MenuItem>
            <MenuItem icon={<AiOutlinePlusSquare />}>Cadastrar Exame</MenuItem>
          </div>

          <div>
            <MenuItem disabled={true}> Esconder Menu </MenuItem>
            <MenuItem icon={<AiOutlinePlusSquare />}>Botão</MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Side;
