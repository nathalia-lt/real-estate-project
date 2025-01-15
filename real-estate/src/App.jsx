import './App.css'
import Hero from './components/Hero'
import categories from './data/data'
import Category from './components/Category'


//Toda a vez que fazemos um map em react, temos que colocar no componente, uma propriedade chamada Key (um identificador unico para cada componente)
function App() {
  
  return (
    <>
    <div >
      <header>Navbar</header>
      <main>
        <Hero/>
        <section>
          Categorias
          <div className='flex flex-col gap-y-2.5'>
          {categories.map((category) => <Category key={category.id} category={category}/>)}
          </div>
        </section>
      </main>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
    </div>
    </>
  )
}

export default App
