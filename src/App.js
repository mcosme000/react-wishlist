import { useState } from 'react'
import {Helmet} from "react-helmet";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import ItemList from './components/ItemList';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [showOverlay, setShowOverlay] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const handleClick = () => {
    setShowOverlay(!showOverlay)
  }

  const handleEdit = (value) => {
    setIsEdit(value === "edit")
  }

  return (
    <div className="App lg:w-4/5 md:h-4/5 shadow-md bg-white">
      <Helmet>
          <meta charSet="utf-8" />
          <title>React Wishlist</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="A simple React Application that helps you to keep track of your wishlist" />
      </Helmet>
      <BrowserRouter>
        <Header />
        <main className="h-full grow relative p-3 overflow-auto">
          <div className="overflow-auto h-full">
            <ItemList onClick={handleClick} onEdit={handleEdit}/>
            { showOverlay && <Overlay onClick={handleClick} isEdit={isEdit}/> }
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
