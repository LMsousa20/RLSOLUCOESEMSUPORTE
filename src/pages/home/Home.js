import Lgtp from '../../assets/imgs/Logo.jpeg';
import './home.css';

function Home() {
    return (
        <div className="cntnr">
            <div className="logo">
                <img className="imglg" src={Lgtp}></img>
            </div>
        </div>
    )
}

export default Home