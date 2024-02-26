import './index.css'
import './App.css';
import data from './data';
import Hero from './components/Hero';
import Card from './components/Card';
import Navbar from './components/Navbar';



export default  function App(){
  
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            {...item}
        />
    )
})        

return (
    <div>
      
        <Navbar />
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
    </div>
)
}


