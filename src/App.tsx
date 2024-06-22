
import './App.css'

function App() {


  return (
    <>
  <header> 
    <div > Sistemas de Gestion de ventas</div>
    <img src="/vite.svg" alt="vite logo"/>
  </header>

 <main>

  <aside>
    <nav>
      <ul id="menu_principal">
        <li><a href="/"><i className="material-icons-outlined">home</i> Inicio</a></li>
        <li><a href="/"><i className="material-icons-outlined">local_grocery_store</i> Productos</a></li>
        <li><a href="/"><i className= "material-icons-outlined">groups</i>clientes</a></li>
        <li><a href="/"><i className= "material-icons-outlined">point_of_sale</i>ventas</a></li>
      
      </ul>
    </nav>
  </aside>

  <section id="contenido">
   <h1>Hola mundo!</h1>

  </section>

 </main>
    </>
  )
}

export default App
