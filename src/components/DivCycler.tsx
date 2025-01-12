import { useState, useEffect } from 'react';

const DivCycler = () => {
  const divs = [
    <div key="1" className="cycle-div" style={{ padding: '20px', fontFamily: '"Source Code Pro"' }}>
      <h1>Developer</h1>
    </div>,
    <div key="2" className="cycle-div" style={{ padding: '20px', fontFamily: "Caveat", fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
      <h1>Designer</h1>
    </div>,
    <div key="3" className="cycle-div" style={{ padding: '20px' }}>
      <h1>Artist</h1>
    </div>,
  ];

  const [currentDiv, setCurrentDiv] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDiv((prevDiv) => (prevDiv + 1) % divs.length);
    }, 4000); // Change div every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="cycle-container">
      {divs[currentDiv]}
    </div>
  );
};

export default DivCycler;