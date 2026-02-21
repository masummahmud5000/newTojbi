'use client'
import { useState, useEffect } from "react";

const Tojbi = () => {
    const [count,setCount] = useState(0)
    const [tojbi,setTojbi] = useState('সুবহানাল্লাহ')
    const [valid,setValid] = useState(Boolean)
    const [user,setUser] = useState('')
    const [step1,setStep1] = useState(1)
    const [step2,setStep2] = useState(0)
    const [step3,setStep3] = useState(0)
    const [usernameLoad,setUsernameLoad] = useState('Guest User');
    //////////////////////////////
    useEffect(() => {
        const userName = localStorage?.getItem('username')
        if (userName){
            setValid(true)
            setUsernameLoad(userName);
        }
    },[])
    //////////////////////////////
    const Counter = () => {
        setCount(count + 1)
        if (count >= 100){
            setCount(0)
        }
        if (count >= 0){
            setTojbi(`সুবহানাল্লাহ ${step1}`)
            setStep1(step1 + 1)
            if(count >= 32){
                setTojbi(`আলহামদুলিল্লাহ ${step2}`)
                setStep2(step2 + 1)
                if (count >= 65){
                    setTojbi(`আল্লাহু আকবার ${step3}`)
                    setStep3(step3 + 1)
                    if (count >= 100){
                        setTojbi(`সুবহানাল্লাহ`)
                        setStep3(0)
                        setStep1(1)
                        setStep2(0)
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
    const RemoveUser = () => {
        localStorage?.removeItem('username')
        window.location.reload()
    }
    //////////////////////////////
    return(
        <main className="pt-15 px-12">
            {valid && <div className="flex justify-center text-center mb-10 text-xl">User- <h1 className="font-bold text-blue-700">{usernameLoad}</h1><button onClick={RemoveUser} className="ml-5 bg-red-600 text-white px-3 rounded-lg pb-1 hover:bg-red-700 cursor-pointer">Remove</button></div>}
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