// useUserRoleColumns.js
import { useState, useEffect } from "react";

const useUserRoleColumns = (userRole, tableColumns, roleColumns) => {
  const [columns, setColumns] = useState([...tableColumns]);

  useEffect(() => {
    if (roleColumns[userRole]) {
      setColumns([...tableColumns, ...roleColumns[userRole]]);
    } else {
      setColumns([...tableColumns]);
    }
  }, [userRole]);

  return columns;
};

export default useUserRoleColumns;
