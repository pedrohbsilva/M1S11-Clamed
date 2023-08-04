import { Routes,Route,  Navigate, useNavigate, useLocation } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFound } from "../pages/notFound";
import { AboutMe } from "../pages/aboutMe";
import { Portfolio } from "../pages/portfolio";
import { useEffect } from "react";

function RoutesApp() {
  const navigate = useNavigate()
  const location = useLocation()
  const previousPage = -1
  
  useEffect(() => {
    const routes = ["/", "/aboutMe", "/portfolio"]
    if(!routes.some((route) => route === location.pathname || route.indexOf("/portfolio") > 0) ) {
      navigate(previousPage)
    } 
  }, [location.pathname, navigate, previousPage])

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/portfolio/:login" element={<Portfolio />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
  );
}

export { RoutesApp };
