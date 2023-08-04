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
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const load = async () => {
      setLoading(true)
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error.message)
        alert(`Erro de dados. Favor contatar suporte\n${error.message}`)
      }
      setLoading(false)
    };
    load();
  }, []);

  if(loading) {
    return (
      <p>
        Carregando...
      </p>
    )
  }

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
