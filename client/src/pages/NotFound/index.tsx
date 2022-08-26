import notFoundIcon from '../../common/img/404-error-svgrepo-com.svg';
import Navbar from '../../components/Navbar';
import style from './NotFound.module.scss';

const NotFound = () => {
    return (
        <>
            <Navbar />
            <section className={style.notfound}>
                <img src={notFoundIcon} alt="Não encontrado" />
                <h1>Página não encontrada.</h1>
            </section>
        </>
    )
}

export default NotFound;