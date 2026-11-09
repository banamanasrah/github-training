import { useEffect, useState } from 'react';

function Hello() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/message")
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <h1>{message}</h1>
  );
}

export default Hello;