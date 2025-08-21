import profilePic from './assets/user.png'
import api from './api/posts'
import { useEffect, useState } from 'react';
import Messagebox from './Messagebox';
import { Routes,Route,Link, useNavigate } from 'react-router-dom';
import "./Messagestyle.css"



const Chatplace = ({validname,vaalidnumber}) => {


    const [message, setMessage] = useState([])
    const [post, setpost] = useState()
    const currentdate = new Date();
    const fulltime = currentdate.getHours().toString()+":"+currentdate.getMinutes().toString()+" " +" "+currentdate.getDate().toString()+"/"+currentdate.getMonth().toString()+"/"+currentdate.getFullYear().toString();
    const id = message.length+1
    const {navigate} = useNavigate()

    useEffect(() => {
        const fetchmessage = async() =>{
            const response = await api.get('/posts')
            setMessage(response.data.reverse())
        }
        fetchmessage();
    },[])

    const handlepost = async() => {
         
        try{
            const response = await api.post('/posts',post)
            setMessage(response.data)
            window.location.reload();
        }
        catch(err){
            console.log(err.message)
        }
        navigate('/')
       
    }

    function handlemessage (e){
        setpost({["id"]: id,["time"]: fulltime,["name"]: validname,["number"]: vaalidnumber,["message"]: e.target.value})
    console.log('handlemee')
    }

return(
    <main>
        <div className='message'>
            {message.map((item) => (
                <div key={item.id}>
                    <img src={profilePic} alt="Profile" className="profile-img" />
                    <div className='message_head'>    
                        <h2 ><span >~ {item.name}</span> <span >+91 {item.number}</span></h2>
                        <br />
                        <p>{item.message}<span>{item.time}</span></p>
                    </div>
                </div>
            ))}
        </div> 

        <Messagebox handlepost={handlepost}
                    handlemessage={handlemessage}/>
    </main>
)
}

export default Chatplace;