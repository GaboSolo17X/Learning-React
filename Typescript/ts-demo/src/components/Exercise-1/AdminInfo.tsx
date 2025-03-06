import React from "react";
import { AdminInfoList } from "../../Types";

type AdminInfoProp = {
    admin:AdminInfoList
}
export const AdminInfo: React.FC<AdminInfoProp> = ({admin}) => {
  return (
    <>
    <div>Id:{admin.id}</div>
    <div>Name:{admin.name}</div>
    <div>Email:{admin.email}</div>
    <div>Rol:{admin.role}</div>
    <div>Login:{admin.lastLogin.toLocaleString()}</div>
  </>
  )
}

