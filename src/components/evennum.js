import React from "react";
import { useEffect, useState } from 'react';
function Evennum()
{
    const [name, setName] = useState('');
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

    return(
        <div>
      <h1>Hello, {name}!</h1>
    </div>

    );
}
export default Evennum;