import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
        await fetch('../../fakedata/healthcaredb.json')
            .then(resp => resp.json())
            .then(data => setServices(data.services));
    }
    fetchData();
}, []);

  return [services];
};

export default useData;
