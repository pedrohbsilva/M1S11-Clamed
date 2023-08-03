import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
function Portfolio() {
  const [repos, setRepos] = useState([]);

  const { login } = useParams()

  useEffect(() => {
    const load = async () => {
      const response = await api.get(`users/${login}/repos`);
      setRepos(response.data);
    };
    load();
  }, [login]);

  return (
    <>
      <Header />
      <Main>
        <p>Portfolio</p>
        <ul>
          {repos.length > 0 &&
            repos.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
        </ul>
      </Main>
      <Footer />
    </>
  );
}

export { Portfolio };
