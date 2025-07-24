import Card from './Card.jsx'

function App() {

    return (
      <>
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></span>
        ))}
      </div>

      <Card/>
      <p>&copy;{new Date().getFullYear()} My small website</p>
      
      </>
    );

}
 
export default App
