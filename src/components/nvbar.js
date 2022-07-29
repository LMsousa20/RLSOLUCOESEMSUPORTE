import './nvbar.css';
import {NavLink} from 'react-router-dom';
import Contacts from '../pages/contacts/Contacts';
import Home from '../pages/home/Home';
import Form from '../pages/form/Form';

function Nvbar(){
    return(
        <div className="nvb">
            <ul className='lst'>
                <li><NavLink to="/">Home</NavLink></li>
                <li>Quem somos</li>
                <li><NavLink to="/contatos">Contatos</NavLink></li>
                <li><NavLink to="/form">Agendamentos</NavLink></li>
                <li>Parceiros</li>            
            </ul>
        </div>
    )
}
export default Nvbar