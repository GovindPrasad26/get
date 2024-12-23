import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
function Update(){
    const {id}= useParams();
    const navigate=useNavigate()
    const [user,setUser]=useState({
        _id:0,
        name:"",
        password:"",
        phonenumber:0,
    })
    useEffect(()=>{
        axios.get(`http://localhost:2333/getuserinfo/${id}`).then((res)=>{
            // console.log(res.data.result)
            setUser(res.data.result)
        }).catch(()=>{
            alert("failed to fetch data")
        })
      
    },[])
    const updateUser =()=>{
        axios.put("http://localhost:2333/userUpdate",user).then((res)=>{
            alert("user update")
             navigate("/")
            console.log(res)

        }).catch(()=>{
            alert("error")
        })
    }
    return(<div>
        <h2>update user</h2>
        <div>
        <input  value={user.name} type="text" placeholder="name" onChange={(e)=>{
            setUser({
                ...user,
                name:e.target.value
            })
        }}/><br /><br />
        <input value={user.password}type="password" placeholder="password" onChange={(e)=>{
            setUser({
                ...user,
                password:e.target.value
            })}} /><br /><br />
        <input value={user.phonenumber} type="phonenumber" placeholder="phonenumber" onChange={(e)=>{
            setUser({
                ...user,
                phonenumber:e.target.value
            })}}/><br /><br />
          
        <button onClick={updateUser}>update</button>
        
        </div>
    </div>)
}
export default Update;