import axios from 'axios';


const api = axios.create({
  baseURL: 'https://fakestoreapi.com', 
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});


export const getProducts = async () => {
  try {
    const response = await api.get('/products'); 
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error; 
  }
};

export default api;