import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../style.css'
import { Icon } from '@mui/material'
import { FaAddressBook, FaBullseye, IconName } from "react-icons/fa";

function Dashboard() {

    const[item,setData]=useState([])
    useEffect(()=>{
        axios.get('https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10')
        .then(response=>{
            console.log(response.data.data)
            setData(response.data.data)
        })
        .catch(error=>console.log(error))
    })
  return (
          
                <div className='container'>
                 <div className='card'>
                 <FaBullseye size="40px" />
                    <div className='item'>
                    {item.totalInstall} <br/>
                    <text>App Installed</text>
                    </div>
                    
                 </div>
                 <div className='card'>
                 <FaBullseye size="40px" />

                    <div className='item'>
                    {item.totaluninstall}<br/>
                    <text>App Installed</text>
                    </div>
                   

                 </div>
                 <div className='card'>
                 <FaBullseye size="40px" />

                    <div className='item'>
                    {item.activeinstall}<br/>
                    <text>App Installed</text>
                        </div>
                     

                 </div>
                 <div className='card'>
                 <FaBullseye size="40px" />

                    <div className='item'>
                    {item.aliveappusers}<br/>
                    <text>App Installed</text> 
                        </div>
                    

                 </div>
                 <div className='card'>
                 <FaBullseye size="40px" />

                    <div className='item'>
                    {item.churn}<br/>
                    <text>App Installed</text>
                        </div>
                   

                 </div>
                 <div className='card'>
                 <FaBullseye size="40px" />
 
                    <div className='item'>
                    {item.alivechurn}<br/>
                    <text>App Installed</text>
                    </div>
                  

                 </div>
                </div>
             

    
  )
}

export default Dashboard