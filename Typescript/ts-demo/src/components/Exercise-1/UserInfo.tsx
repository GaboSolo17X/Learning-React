import { Info } from "../../Types";

type UserInfoProp = {
  user: Info;
};
export const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
  return (
    <>
      <div>Id:{user.id}</div>
      <div>Name:{user.name}</div>
      <div>Email:{user.email}</div>
    </>
  );
};
