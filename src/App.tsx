import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProgressBars from './ProgressBars';
import './App.css';
import SceneSelect from './SceneSelect';
import Home from './Home';
import Survey from './Survey';
import Record from './Record';

// add all new subject's names + codename to names.json
import namesData from './names.json';

// import all codename to name pairs from names.json
// create routes for each codename
interface NameEntry {
  [key: string]: string;
}
const nameEntries: NameEntry[] = namesData.names as unknown as NameEntry[];
const dynamicRoutes = nameEntries.map((entry) => {
  const sceneName = Object.keys(entry)[0];
  const personName = entry[sceneName];
  return { path: `/${sceneName}`, name: personName, element: <Home name={sceneName} /> };
});

// dynamically create routes for each user to have their own scene/recording page
const routes = [
  { path: '/scenes/:name', name: 'Select', element: <SceneSelect /> },
  ...dynamicRoutes,
  { path: '/survey/:name/:scene', name: 'Survey', element: <Survey /> },
  { path: '/record/:name/:scene', name: 'Record', element: <Record /> }
];

function App() {
  return (
    <div className="App-header">
      <Routes>
        {routes.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
