import Countries from "./Countries";
import Header from "./Header";
import SearchAndDrop from "./SearchAndDrop";




function Home() {
    return (
        <div>
            <Header />
            <SearchAndDrop />
            <Countries />
        </div>
    )
}

export default Home;