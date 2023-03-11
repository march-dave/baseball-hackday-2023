import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://statsapi.mlb.com/api/v1/people/430832');

        debugger
        console.log('sdfjlsdkfjsd: ', JSON.stringify(response))
        setData(response.data.people);
        // setData(response.people);

      } catch (error) {
        console.log(error);
      }
    };
    // fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.fullName}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default ExampleComponent;
