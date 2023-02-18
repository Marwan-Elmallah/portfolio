import './App.css';
import Contact from './components/Contact';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  window.onscroll = () => {
    const nav = document.getElementById("nav")
    const mainImg = document.getElementById("mainImg")
    const contactImg = document.getElementById("contactImg")
    let scrollPosition = window.scrollY
    if(scrollPosition >= 200){
        nav.style = "background: black; transition: 1s"
      if(scrollPosition < 600){
        mainImg.classList.add("animateImg")
        setTimeout(() => {mainImg.classList.remove("animateImg")},1000)
      }else if (scrollPosition > 600){
        mainImg.classList.remove("animateImg")
        if(scrollPosition > 1900){
          contactImg.classList.add("animateImg")
        }else{
          contactImg.classList.remove("animateImg")
        }
      }
    }else{
      nav.style = "background: transparent; transition: 1s"
    }
  }



  return (
    <div className="App">
      <Header/>             
      <Home/>
      <Skills>
      </Skills>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;