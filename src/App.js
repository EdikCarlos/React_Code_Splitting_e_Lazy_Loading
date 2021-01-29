import './App.css';
import { lazy, Suspense } from "react";
const Slogan = lazy(() => import('./Slogan'));
const Link = lazy(() => import('./Link'));
const Ying = lazy(() => import('./Img'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<p>Carregando Imagem...</p>}>
          <Ying />
        </ Suspense>
        <br /> <br />
        <Suspense fallback={<p>Carregando Nome...</p>}>
          < Slogan />
        </Suspense>

        <Suspense fallback={<p>Carregando Link...</p>}>
          <Link />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
