import { Link } from "react-router-dom";
import Countries from "./Countries";
import Header from "./Header";
import SearchAndDrop from "./SearchAndDrop";




function Home() {
    return (
        <div>
            <Header />
            <Link to="/detail">Detail</Link>
            <Link to="/del">De</Link>
            <SearchAndDrop />
            <Countries />
        </div>
    )
}

export default Home;