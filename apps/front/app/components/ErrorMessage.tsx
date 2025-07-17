import React from "react";

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;
  return (
    <div className="text-red-300 bg-red-950 border border-red-700 p-3 rounded-md mb-4 font-medium">
      Error: {error}
    </div>
  );
};

export default ErrorMessage;
