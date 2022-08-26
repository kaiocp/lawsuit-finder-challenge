import { useParams } from "react-router-dom";

const SearchResult = () => {
    const {court, number} = useParams();

    return (
        <>
        {court}
        {number}
        </>
    )
}

export default SearchResult;