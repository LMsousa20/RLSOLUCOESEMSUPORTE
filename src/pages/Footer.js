
import Heart from './heart.png';
import './footer.css';

function Footer () 
{
return (
    <div className="ftr">
        <span>
        Produzido com muito amor pelo CEO - Lucas Monteiro
        </span>
        <img className="logo-ftr" src={Heart} alt={Heart}></img>
    </div>
);

}
export default Footer