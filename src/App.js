import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeMain from './component/WelcomeMain.tsx';
import PersonalMain from './component/PersonalMain.tsx';
import ProjectDetail from './component/ProjectDetail.tsx';
import ProjectCreate from './component/ProjectCreate.tsx';
import EmptyPage from './component/EmptyPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<WelcomeMain/>}/>
          <Route path='/personal_main' element={<PersonalMain/>}/>
          <Route path='/project_detail/:proj' element={ <ProjectDetail/> }/>
          <Route path='/project_create' element={ <ProjectCreate/> } />
          <Route path='*' element={ <EmptyPage/> } />
        </Routes>
      </div>    
    </BrowserRouter>
  );
}

export default App;

/* json server */
// npx json-server ./src/db/data.json --port 3003
// Resources
// http://localhost:3003/project

// Home
// http://localhost:3003

/* REST API */
// CREAT : POST
// READ : GET
// UPDATE : PUT
// DELETE : DELETE

/* typescript */
// npm install typescript @types/node @types/react @types/react-dom @types/jest @types/react-router-dom @types/styled-components
