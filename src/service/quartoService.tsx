import axios from 'axios';
import Quarto from '../core/Quarto';

interface ApiResponse {
content: Quarto[];
}

const BASE_URL = 'http://localhost:8080';
export const fetchQuartos = async (): Promise<Quarto[]> => {
 try {
 const response = await axios.get<ApiResponse>(`${BASE_URL}/reservas`);
 return response.data.content;
 } catch (error) {
 throw new Error('Erro ao buscar quarto');
 }};

 export const cadastrarQuarto = async (quarto: Quarto): Promise<Quarto> => {
    try {
    const response = await axios.post<Quarto>(`${BASE_URL}/reservas`, quarto);
    return response.data;
    } catch (error) {
    console.error("Erro ao cadastrar quarto:", error);
    throw error;
    }
   };

   export const atualizarQuarto = async (quarto: Quarto): Promise<Quarto> => {
    try {
    const response = await axios.put<Quarto>(
    `${BASE_URL}/reservas/${quarto.id}`, quarto);
    return response.data;
    } catch (error) {
    console.error("Erro ao atualizar quarto:", error);
    throw error;
    }
   };

   export const excluirQuarto = async (id: number): Promise<void> => {
    try {
    await axios.delete(`${BASE_URL}/reservas/${id}`);
    } catch (error) {
    console.error("Erro ao excluir quarto:", error);
    throw error;
    }
   };