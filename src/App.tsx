import "./App.css"
import GreetingCard from "./components/CardGreeting";


//esta funcion muestra todos los componentes que vayamos a crear
function App() {

  // creamos un array con diferentes usuarios (nombre + edad)
  const users = [
    { name: "Laura", age: 18 },
    { name: "Juan", age: 18 },
    { name: "Natt", age: 20 },
    { name: "Samuel", age: 19 },
    { name: "Male", age: 18 },
    { name: "Isa", age: 19 }
  ]

  return (
    <>

      {/* esto seria un contenedor en grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
        {/* recorremos el array con .map() y asi cada usuario tendria la misma card */}
        {users.map((user, index) => (
          <GreetingCard key={index} name={user.name} age={user.age} /> 
        ))}
      </div>
    </>
  )
}

export default App;