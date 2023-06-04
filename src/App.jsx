import ApiConnection from "./components/ApiConnection"

function App() {
  return (
    <div>
      <h1 className="p-3 bg-dark bg-opacity-75 border border-dark border-start-0 rounded-end fw-bold border border-0 text-white">Verificador de Código Postal</h1>

      <div className="p-3 bg-body-secondary bg-opacity-100 border border-dark border-start-0 rounded-end fw-bold border border-0">
        <h5>Códigos Postales de México</h5>
        <h5>Ingresa el código postal de 5 dígitos que quieres buscar y se desplegarán los datos al lugar que pertenece.</h5>
        <br />
        <ApiConnection />
      </div>

      <footer className="p-3 bg-dark bg-opacity-75 border border-dark border-start-0 rounded-end fw-bold border border-0">
      </footer>

    </div>


  )
}

export default App
