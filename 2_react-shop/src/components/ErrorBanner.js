import React from "react";

function ErrorBanner({ message }) {
  const errorMessage = message || "에러";

  return <div data-testid="error-banner">{errorMessage}</div>;
}

export default ErrorBanner;
