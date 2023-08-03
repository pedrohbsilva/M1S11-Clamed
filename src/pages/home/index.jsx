import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Main } from "../../components/main";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { 
  HomeUlStyled, 
  HomeLiStyled,
  HomeImgStyled,
  HomeLinkStyled
 } from "./styled";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      const response = await api.get("/users");

      setUsers(response.data);
    };
    load();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <p>Home</p>
        <HomeUlStyled>
          {users.length > 0 &&
            users.map(({ login, avatar_url }) => {
              return (
                <HomeLiStyled key={login} className="li">
                  <p>{login}</p>
                  <HomeImgStyled
                    newImg={"defunkt" === login}
                    src={avatar_url}
                  />
                  <HomeLinkStyled to={`/portfolio/${login}`}>
                    Venha ver meu portfolio
                  </HomeLinkStyled>
                </HomeLiStyled>
              );
            })}
        </HomeUlStyled>
      </Main>
      <Footer />
    </>
  );
}

export { Home };
