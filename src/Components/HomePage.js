import Header from "./HomePageComp/Header"
import About  from "./HomePageComp/About"
import Footer from "./HomePageComp/Footer"


const HomePage = () => {
    return(
        <section id="HomePage">
            <Header />
            <About />
            <hr style={{color:'white'}}/>
            <Footer />
        </section>
    );
}

export default HomePage