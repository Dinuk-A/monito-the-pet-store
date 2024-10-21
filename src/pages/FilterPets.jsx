import Footer from "../components/FooterComp";
import PetsFilterComp from "../components/PetsFilterComp";
import Header from "../components/HeaderComp";

// page to show all dogs and do filterings
const Dog = () => {
    return (
        <>
            <Header></Header>
            <PetsFilterComp></PetsFilterComp>
            <Footer></Footer>
        </>
    )
}

export default Dog;