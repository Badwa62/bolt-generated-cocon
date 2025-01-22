const API_URL = 'http://localhost:3001/api';

async function fetchData(endpoint, method = 'GET', data = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export default {
  fetchData,
};
