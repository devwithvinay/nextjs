"use client"

import todoService from "@/services/todoService";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const [todos , setTodods] = useState([])

    useEffect(() => {
      loadTodos();
    }, []);


  const loadTodos = async ()=>{
    try {
    const data =  await todoService.getAllTodos();
    setTodods(data)
    } catch (error) {
      
    }
  }
  return (
   <div>Testing</div>
  );
}
