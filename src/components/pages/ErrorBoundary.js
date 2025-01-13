import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children, error }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (error){setHasError(true)} 
  }, [error]);

  const ErrorPage = () => {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Something went wrong!</h1>
        <p>We're sorry, but there was an issue loading this page. Get back later!</p>
      </div>
    );
  };

  if (hasError) {
    return ErrorPage();
  }
  return children;
};

export default ErrorBoundary;