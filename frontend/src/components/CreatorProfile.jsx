import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const CreatorProfile = () => {
    const[user,loading,erro] = useState(auth);
    const[name,setName] = useState("");
    const navigate  = useNavigate();
    const fetchUserName = async()=>{
        try {
            const q = query(collection(db, "users"), where ("uid", "==",user?.uid))
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name)
            console.log(data.name)
        }
        catch(err) {
            console.error(err)
            alert("An error occured while fetching user data")
        }
    }
    useEffect(()=>{
        if(loading) return;
        if(!user) return navigate("/");
        fetchUserName();


    }, [user,loading])
    return(   
    <div className="h-screen grid place-items-center">

        <div className="welcome text-5xl">Welcome Back, {name}</div>
        <div className="profile-area text-2xl">
            <div className="email"><span>Your email :</span>
            <span><button class="bg-orange-500 hover:bg-orange-700 text-white  py-1 px-2 rounded">
                Update
            </button></span>
            </div>
            <div className="link">
            <span>Your Website Link :</span>
            <span><button class="bg-orange-500 hover:bg-orange-700 text-white  py-1 px-2 rounded">
                Update
            </button></span>
            </div>
            <div className="public-address"><span>Your Public address for donation: :</span>
            <span><button class="bg-orange-500 hover:bg-orange-700 text-white  py-1 px-2 rounded">
                Update
            </button></span></div>
            <button onClick={logout} class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                LogOut
            </button>
        </div>
    </div>)
}
export default CreatorProfile