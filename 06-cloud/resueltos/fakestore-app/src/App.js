import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Login from "./pages/auth/Login";
import NewForm from "./pages/auth/NewForm";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className="min-h-screen flex flex-col">
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/carrito" exact element={<Cart />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/new" exact element={<NewForm />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
