const { createContext, useState } = require("react");

export const PermissionContext = createContext();

const PermissionProvider = ({ children }) => {
    const [permission, setPermission] = useState();
    return (
        <PermissionContext.Provider value={{ permission, setPermission }}>
            {children}
        </PermissionContext.Provider>
    )
}

export default PermissionProvider;