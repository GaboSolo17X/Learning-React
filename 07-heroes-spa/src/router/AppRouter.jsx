import { Route ,Routes } from "react-router";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  return (
    <>

     <Routes>

        {/* <Route path="Login" element={<LoginPage/>}/> */}

        <Route path="/login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }/>

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        }/>
        {/* <Route path="/*" element={<HeroesRoutes/>}/> */}


     </Routes>
    </>
  )
}
