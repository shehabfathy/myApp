
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Start from './Component/Start/Start.jsx'
import About from './Component/About/About.jsx'
import Portfolio from './Component/Portofolio/Portofolio.jsx'
import Contact from './Component/Contact/Contact.jsx';
import NotFound from './Component/NotFound/NotFound.jsx';

function App() {
 let routes = createBrowserRouter([
  {path: "",element:<Layout/>  ,children:[
    {index: true,element:<Start/>},
    {path:'start',element:  <Start/>},
    {path: 'about',element: <About/>},
    {path: 'portfolio',element: <Portfolio/>},
    {path: 'contact',element: <Contact/>},
    {path: '*',element: <NotFound/>},
  ]}
 ])
  return <>
      <RouterProvider router={routes} ></RouterProvider>
  </>
}

export default App;
