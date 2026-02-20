'use client'
import { useState, useEffect } from "react";

const Tojbi = () => {
    const [count,setCount] = useState(0)
    const [tojbi,setTojbi] = useState('সুবহানাল্লাহ')
    const [valid,setValid] = useState(Boolean)
    const [user,setUser] = useState('')
    //////////////////////////////
    useEffect(() => {
        const userName = localStorage?.getItem('username')
        if (userName){
            setValid(true)
        }
    },[])
    //////////////////////////////
    const Counter = () => {
        setCount(count + 1)
        if (count >= 100){
            setCount(0)
        }
        if (count >= 0){
            setTojbi('সুবহানাল্লাহ')
            if(count >= 32){
                setTojbi('আলহামদুলিল্লাহ')
                if (count >= 65){
                    setTojbi('আল্লাহু আকবার')
                    if (count >= 100){
                        setTojbi('সুবহানাল্লাহ')
                    }
                }
            }
        }
    }
    //////////////////////////////
    const nameSet =(e) => {
        e.preventDefault();
        localStorage.setItem('username',user)
        setValid(true)
        window.location.reload()
    }
    //////////////////////////////
    return(
        <main className="pt-20 px-12">
            {valid && <div className="flex justify-center"><h1 className="bg-green-300 py-5 px-5 rounded-xl text-2xl font-bold">{tojbi}</h1></div>}
            {valid && <div className="border-2 border-b-blue-500 bg-amber-500 mt-18 rounded-2xl flex flex-col justify-center items-center h-60 gap-10">
                <h1 className="text-4xl bg-blue-800 text-white p-2 rounded-2xl">{count}</h1>
                <h1 onClick={Counter} className="bg-green-700 text-white py-7 px-7 border-2 rounded-full text-2xl cursor-pointer">Click</h1>
            </div>}
            {!valid && <form onSubmit={nameSet} className="bg-green-500 py-2 px-4 rounded-xl border-2 border-amber-700">
                <input className="bg-amber-100 py-1 px-1 w-35 rounded-lg mr-3" type="text" placeholder="Enter Your Name" required onChange={(e)=>setUser(e.target.value)}/>
                <button type="submit" className="bg-red-700 text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-red-800">Submit</button>
            </form>}
        </main>
    )
}
export default Tojbi;