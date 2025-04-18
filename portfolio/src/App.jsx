import './App.css'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'

export default function App () {
  let desc1 = "As Co Project Manager, aligning Work Guidelines with Client Timelines >>> \nJun/2022 - Nov/2022";
  let desc2 = "Well an Engineer..!! UnderGrad. Information Science & Engg >>> Dec/2022 - Apr/2026";
  let desc3 = "Arriving Software Development Engineering Intern >>> Jul/2022";
  return (
    <>
      <Header/>
      <Card name="SYNXA IT, A.P" desc={desc1}/>
      <Card name="BIT, BGLR" desc={desc2}/>
      <Card name="NI-EMERSON" desc={desc3}/>
      <Footer/>
    </>
  );
}

