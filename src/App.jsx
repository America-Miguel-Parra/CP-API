import ApiConnection from "./components/ApiConnection"

function App() {
  return (
    <div>
      <div style={{ backgroundColor: "#0C231E" }}>
        <h3 className="p-4 text-white text-center">Verificador de Código Postal</h3>

        <div className="p-5 text-white " style={{ backgroundColor: "#13322B" }}>
          <h5 >Códigos Postales de México</h5>
          <h5 className="fw-light">Ingresa el código postal de 5 dígitos que quieres buscar y se desplegarán los datos al lugar que pertenece.</h5>
        </div>
      </div>

      <div className="container my-5 text-center">
        <ApiConnection />
      </div>

    </div>


  )
}

export default App
