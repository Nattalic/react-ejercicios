//se crea el componente en la carpeta de componentes
//se asigna el tipo para ser más especifico


type GreetingCardProps = { 
  name: string //nombre
  age: number //edad
}

//creamos la funcion donde mostraremos el mensaje 
function CardGreeting({ name, age }: GreetingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
      <h2 className="text-xl font-bold text-gray-800">
        {/* saludo */}
        ¡Hola, <span className="text-violet-600">{name}</span>! 
      </h2>
      <p className="mt-2 text-gray-600 text-sm">
         {/* edad */}
        Tienes {age} años :D
      </p>
    </div>
  )
}

//exportamos la funcion
//es la forma en que React organiza y comparte sus componentes entre archivos
//permite reutilizar el componente y poder importarlo en app.tsx
export default CardGreeting
