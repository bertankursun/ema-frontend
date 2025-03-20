import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

// no longer using this, can delete file
const SceneSelect = () => {
  const { name } = useParams();

  return (
    <div className="App">
        <div>
            <Link to={`/survey/${name}/1`}>Scene 1</Link>
        </div>
        <div>
            <Link to={`/survey/${name}/2`}>Scene 2</Link>
         </div>
    </div>
  );
};

export default SceneSelect;