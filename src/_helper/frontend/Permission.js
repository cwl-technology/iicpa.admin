import { useContext } from "react"
import { PermissionContext } from "@/_context/PermissionContext"


const usePermission = (menuId) => {
    const {permission} = useContext(PermissionContext)

    return (serviceNumber) => {
        const permissions = permission?.find((ele) => ele.menuId == menuId)
        return permissions?.[serviceNumber] || null;
    }
}

export default usePermission;