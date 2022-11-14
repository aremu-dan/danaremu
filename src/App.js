import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// 
import './App.css';

// 
import  Loader from './compx/loader/Loader';
import Page from './compx/page/Page';
// import Headernav from './compx/headerNav/Headernav';
// import LandingPage from './compx/landingPage/Landingpage';

// 
const LandingPage = lazy(() => import('./compx/landingPage/Landingpage'));
const HomePage = lazy(() => import('./compx/homePage/Homepage'));
const AboutPage = lazy(() => import('./compx/aboutPage/Aboutpage'));
const ProjectPage = lazy(() => import('./compx/projectPage/Projectpage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          {/*  */}
          <Route 
            exact 
            path="/" 
            element={<LandingPage />} />
          
          {/*  */}
          <Route 
            exact 
            path="/home" 
            element={<Page pageComponent={<HomePage />} pageClass='home' />} />

          {/*  */}
          <Route
            exact 
            path="/about"
            element={<Page pageComponent={<AboutPage />} pageClass='about' />} />

          {/*  */}
          <Route
            exact 
            path="/projects"
            element={<Page pageComponent={<ProjectPage />} pageClass='projects' />} />

            {/*  */}
            {/* <Route
              exact
              path='/privacy-policy'
              element={() => { 
                window.location.href = 'https://example.com/1234'; 
                return null;
              }} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
