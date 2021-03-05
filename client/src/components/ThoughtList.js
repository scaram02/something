import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'


const ThoughtList = props => {

const [data, setData] = useState({allThoughts: []})

// does this go here or like app.jssss
useEffect(() => {
    const fetchData = async() => {
        const result = await axios(
            `/api/thought`
        )
        console.log("result : ", result.data)
        setData(result.data)
    }
    fetchData()
}) 
// add or take away the [] depending


    return (
        <div>
    {/* fix this styling later re: linkage */}
       {data.length? (
           data
           .map
           ((thought, i) => (
             <div key={i} style={{border: "3px solid green"}}>
            <Link to={`/thought/${thought._id}`}>
            <h1>{thought.thought}</h1>
            <h2 style={{color: 'blue'}}>{thought.user.username} thought of this</h2>
            </Link>
           {props.user.username === thought.user.username && 
           <Link to={`/thought/edit/${thought._id}`}>Having second thoughts?</Link>}
           <DeleteButton thought={thought} user={props.user}/>
            </div>
          
           ))
       ) : 
       <h1>no thoughts to display</h1>}  

        </div>
    )
}

export default ThoughtList