import { useEffect } from 'react';

const CustomSignInHook = (url, onload) => {
    
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.onload = onload;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [url, onload]);
};

export default CustomSignInHook;