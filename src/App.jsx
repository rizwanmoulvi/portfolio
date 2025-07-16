import MatrixRain from "./components/MatrixRain";
import Skills from './components/Skills';


function App() {
  return (
    <div className="relative font-mono min-h-screen" style={{ color: "#0f0" }}>
      <MatrixRain />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <h1
          className="text-5xl font-bold mb-4 animate-pulse"
          style={{ color: "#0f0" }}
        >
          I AM RIZZ
        </h1>
        <p className="text-xl mb-6 ">
          Crafting digital realities through code. Building systems that bridge
          the gap between imagination and execution.
        </p>
      </div>
    </div>
  );
}

export default App;
