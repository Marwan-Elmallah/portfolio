import { useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {


  useEffect(() => {
    document.getElementById("mainImg").classList.add("animateImg")
  })

  window.onscroll = () => {
    const nav = document.getElementById("nav")
    const mainImg = document.getElementById("mainImg")
    const contactImg = document.getElementById("contactImg")
    let scrollPosition = window.scrollY
    if(scrollPosition >= 200){
        nav.style = "background: black; transition: 1s"
      if(scrollPosition < 500){
        mainImg.classList.add("animateImg")
      }else if (scrollPosition > 500){
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