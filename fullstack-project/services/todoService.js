import axios from "axios";

const API_URI = "/api/todos" // agr khi aur likha h to pura dena padega

const todoService = {
    getAllTodos : async () =>{
        try {
            const response = await axios.get(API_URI)
            return response.data
        } catch (error) {
            NextResponse.json({
                        error:"Failed to connect Api"
                    },
                    {status:500})
        }
    },

    getTodoById :async (id)=>{
        try {
            const response = await axios.get(`${API_URI}/${id}`)
            return response.data
            
        } catch (error) {
            NextResponse.json({
                        error:"Failed to get id"
                    },
                    {status:500})
        }
    }
}

export default todoService;