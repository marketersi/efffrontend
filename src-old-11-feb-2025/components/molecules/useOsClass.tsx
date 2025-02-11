import { useState, useEffect } from 'react';

const useOsClass = () => {
  const [osClass, setOsClass] = useState('');

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    if (platform.includes('mac')) {
      setOsClass('mac'); // For Mac devices
    } else if (platform.includes('win')) {
      setOsClass('win'); // For Windows devices
    } else if (/iphone|ipod/.test(userAgent)) {
      setOsClass('iphone'); // For iPhone devices
    } else if (/android/.test(userAgent)) {
      setOsClass('android'); 
    }
  }, []);

  return osClass;
};

export default useOsClass;
