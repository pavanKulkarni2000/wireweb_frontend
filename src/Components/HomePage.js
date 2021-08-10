import Header from './HomePageComp/Header';
import About from './HomePageComp/About';
import Footer from './HomePageComp/Footer';


const HomePage = (props) => {
  return (
    <section id="HomePage">
      <Header user={props.user} />
      <About />
      <hr style={{color: 'white'}}/>
      <Footer />
    </section>
  );
};

export default HomePage;
