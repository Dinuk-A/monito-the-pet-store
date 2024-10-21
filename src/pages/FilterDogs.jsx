import Footer from "../components/Footer";
import DogShowcase from "../components/PetsShowcase";
import Header from "../components/Header";

// page to show all dogs and do filterings
const Dog = () => {
    return (
        <>
            <Header></Header>
            <DogShowcase></DogShowcase>
            <Footer></Footer>
        </>
    )
}

export default Dog;