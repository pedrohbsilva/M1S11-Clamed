import {useNavigate} from 'react-router-dom'
 
function NotFound() {
  const navigation = useNavigate()
  return (
    <>
        <p>Não foi encontrada a página solicitada.</p>
        <button onClick={() => navigation(-1)}> Retorne a página anterior</button>
        
    </>

    );
}
export { NotFound };
