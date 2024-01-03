import { useState, useEffect } from 'react';
import ComponentA from './PortfolioA';
import ComponentB from './PortfolioB';


const Portfolio = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {screenSize < 600 && <ComponentA />} {/* Show ComponentA on small screens */}
      {screenSize >= 600 && <ComponentB />} {/* Show ComponentB on medium screens */}
    </div>
  );
};

export default Portfolio;
