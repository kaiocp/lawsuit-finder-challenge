import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../common/http";
import Lawsuit from "../../common/interfaces/Lawsuit.interface";
import dateFormatter from "../../common/utils/dateFormatter";

const SearchResult = () => {
    const {court, number} = useParams();
    const [lawsuit, setLawsuit] = useState<Lawsuit | undefined>();

    useEffect(() => {
        http.get<Lawsuit[]>(`lawsuits/${court}&${number}`)
            .then(res => setLawsuit(res.data[0]))
            .catch(err => console.log(err));
    }, [court, number]);

    return (
        <div>
            {lawsuit ?
                <section>
                    <header>
                        <h1>Processo n. {lawsuit.cnj_number} do {lawsuit.court}</h1>
                    </header>
                    <section>
                        <section>
                            <h2>Detalhes</h2>
                            <div>
                                <h3>Distribuído em <time dateTime={dateFormatter(lawsuit.date)}>{dateFormatter(lawsuit.date)}</time></h3>
                                <p>Demandante: {lawsuit.plaintiff}</p>
                                <p>Demandado/a: {lawsuit.defendant}</p>
                            </div>
                        </section>
                        <section>
                            <h2>Movimentações</h2>
                            {lawsuit.occurrences.map(occurrence => (
                                <article key={occurrence._id}>
                                    <time dateTime={dateFormatter(occurrence.date)}>{dateFormatter(occurrence.date)}</time>
                                    <p>{occurrence.description}</p>
                                </article>
                            ))}
                        </section>
                    </section>
                </section>
                :
                <h1>Nenhum processo corresponde à sua pesquisa.</h1>
            }
        </div>
    )
}

export default SearchResult;