import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p style={{ color: "red", textAlign: "center" }}>{message}</p>;
};

export default ErrorMessage;
