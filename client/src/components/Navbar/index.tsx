import { Link } from 'react-router-dom';
import style from './Navbar.module.scss';
import balance from '../../common/img/balance-law-svgrepo-com.svg'; 

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div>
                <img src={balance} alt="Logo"/>
                <h1>Consulta Processual</h1>
            </div>
            <button><Link className={style.btn} to='/'>Buscar</Link></button>
        </nav>
    )
}

export default Navbar;