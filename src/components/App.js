import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

function App() {
  return (
    <BrowserRouter>

      <div>
        <Link id="form-link" to="/">
          Form
        </Link>

        <br />

        <Link id="form-ref-link" to="/form-ref">
          Form Ref
        </Link>

        <br />

        <Link id="form-state-link" to="/form-state">
          Form State
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='/form-ref' element={<FormRef/>}></Route>
        <Route path='/form-state' element={<FormState/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
