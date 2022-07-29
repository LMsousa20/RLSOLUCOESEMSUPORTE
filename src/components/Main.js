import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from '../pages/contacts/Contacts';
import Form from '../pages/form/Form';
import Home from '../pages/home/Home';

function Main() {
    return (
        <div>
          
            
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contatos" element={<Contacts />} />
                    <Route path="/form" element={<Form />} />
                </Routes>



          
        </div>

    )
}
export default Main;