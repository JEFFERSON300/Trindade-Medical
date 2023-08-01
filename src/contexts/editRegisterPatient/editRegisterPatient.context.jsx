import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const editRegisterPatientContext = createContext({
  edit: {
    isEdit: false,
  },
  setEdit: () => {},
});

export const editRegisterPatientProvider = ({ children }) => {
  const [edit, setEdit] = useState({
    isEdit: false,
  });

  return (
    <>
      <editRegisterPatientContext.Provider value={{ edit, setEdit }}>
        {children}
      </editRegisterPatientContext.Provider>
    </>
  );
};

editRegisterPatientProvider.propTypes = {
  children: PropTypes.node,
};
