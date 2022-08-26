import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../common/http";
import Lawsuit from "../../common/interfaces/Lawsuit.interface";
import dateFormatter from "../../common/utils/dateFormatter";
import style from './SearchResult.module.scss';
import searchIcon from '../../common/img/search-svgrepo-com.svg';
import sortArrayByDate from "../../common/utils/sortArrayByDate";
import Navbar from "../../components/Navbar";

const SearchResult = () => {
    const {court, number} = useParams();
    const [lawsuit, setLawsuit] = useState<Lawsuit | undefined>();

    useEffect(() => {
        http.get<Lawsuit[]>(`lawsuits/${court}&${number}`)
            .then(res => setLawsuit(res.data[0]))
            .catch(err => console.log(err));
    }, [court, number]);

    return (
        <>
            <Navbar />
            {lawsuit ?
                <section className={style.lawsuit}>
                    <header>
                        <h1>Processo n. {lawsuit.cnj_number} do {lawsuit.court}</h1>
                    </header>
                    <section className={style.lawsuit__content}>
                        <section className={style.lawsuit__details}>
                            <h2>Detalhes</h2>
                            <hr />
                            <article>
                                <h3><span>Distribuído em:</span> <time dateTime={dateFormatter(lawsuit.date)}>{dateFormatter(lawsuit.date)}</time></h3>
                                <p><span>Demandante:</span> {lawsuit.plaintiff}</p>
                                <p><span>Demandado/a:</span> {lawsuit.defendant}</p>
                            </article>
                        </section>
                        <section className={style.lawsuit__occurrences}>
                            <h2>Movimentações</h2>
                            {sortArrayByDate(lawsuit.occurrences).map(occurrence => (
                                <article key={occurrence._id}>
                                    <time dateTime={dateFormatter(occurrence.date)}>{dateFormatter(occurrence.date)}</time>
                                    <p>{occurrence.description}</p>
                                </article>
                            ))}
                        </section>
                    </section>
                </section>
                :
                <section className={style.noresults}>
                    <h1>Nenhum processo corresponde à sua pesquisa.</h1>
                    <img src={searchIcon} alt="Não encontrado" />
                </section>
            }
        </>
    )
}

export default SearchResult;