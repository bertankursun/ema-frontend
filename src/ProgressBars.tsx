import React, { useEffect, useState } from 'react';

type ProgressBarsProps = {
  name: string;
};

const ProgressBars = ({ name }: ProgressBarsProps) => {  
  const [scene1, setScene1] = useState(0);
  const [scene2, setScene2] = useState(0);

  useEffect(() => {
    fetch(`https://emaserver.dsjlsdjsakdjsads.online/getProgress?name=${name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch progress');
        }
      })
      .then((data) => {
        setScene1(data.scene1);
        setScene2(data.scene2);
      })
      .catch((error) => {
        console.error('Failed to fetch progress:', error);
      });
  }, [name]); 

  return (
    <div>
      <p>Hi there, {name}! Here is your progress:</p>
      <div>
        Scene 1: <progress value={scene1} max={5} /> ({scene1} out of 5 done)
      </div>
      <div>
        Scene 2: <progress value={scene2} max={5} /> ({scene2} out of 5 done)
      </div>
    </div>
  );
};

export default ProgressBars;
