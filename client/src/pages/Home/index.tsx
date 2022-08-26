import { useState } from "react";
import Button from "../../components/Button";
import DropdownInput from "../../components/Inputs/Dropdown";
import NumberInput from "../../components/Inputs/NumberInput";
import style from './Home.module.scss';
import img from '../../common/img/balance-law-svgrepo-com.svg'
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [court, setCourt] = useState('');
    const [cnjNumber, setCnjNumber] = useState('');

    const navigate = useNavigate();

    const submit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        navigate(`/busca/${court}/${cnjNumber}`);
    }

    return (
        <section className={style.home}>
            <header>
                <h1>Consulta processual</h1>
                <figure>
                    <img 
                        src={img} 
                        alt="Balança, símbolo do Direito"
                    />
                </figure>
            </header>
            <form onSubmit={submit}>
                <fieldset>
                    <h2>Digite o número do processo e tribunal para realizar sua busca</h2>
                    <div>
                        <NumberInput
                            value={cnjNumber}
                            onChange={(ev) => setCnjNumber((ev.target as HTMLInputElement).value)}
                        />
                        <DropdownInput
                            courts={['tjba', 'tjpe', 'tjsc']}
                            value={court}
                            onChange={(ev) => setCourt((ev.target as HTMLSelectElement).value)}
                        />
                        <Button
                            disabled={court && (/^[0-9.-]*$/.test(cnjNumber)) && cnjNumber ? false : true}
                        />
                    </div>
                </fieldset>
            </form>
        </section>
    )
}

export default Home;