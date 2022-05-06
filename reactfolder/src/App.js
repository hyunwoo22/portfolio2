import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Detail from "./routes/Detail";
import InputSample from './sample/InputSample';
import UserList from './sample/UserList';

function App() {
  return (
      <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/:id' element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <UserList /> */}
      </>

  );
}

export default App;
