'use client'
import { useEffect } from "react"
import { useRouter } from "next/navigation";

export default function Home() {
  let router = useRouter();

  useEffect(() => {
    const Run = () => {
      setTimeout(router.push('/tojbi'),5000)
    }
    Run();
  },[])
  //////////////////////////
  return (
   <main className="flex justify-center pt-50">
    <h1 className="fa fa-spinner text-8xl text-blue-700 animate-[spin_320ms_linear_infinite]"></h1>
   </main> 
  )
}
