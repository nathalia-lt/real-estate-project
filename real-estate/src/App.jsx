import './App.css'
import Hero from './components/Hero'
import categories from './data/data'
import Category from './components/Category'


//Toda a vez que fazemos um map em react, temos que colocar no componente, uma propriedade chamada Key (um identificador unico para cada componente)
function App() {
  
  return (
    <>
    <div>
      <header>Navbar</header>
      <main>
        <Hero/>
        <section>
          Categorias
          {categories.map((category) => <Category key={category.id} category={category}/>)}
        </section>
      </main>
      <footer>All rights reserved</footer>
    </div>
    </>
  )
}

export default App
