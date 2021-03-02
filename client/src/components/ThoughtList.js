import axios from 'axios'
import React, {useState, useEffect} from 'react'
import DeleteThought from './DeleteThought'

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

    return (
        <div>
       {data.length? (
           data
           .map
           ((thought, i) => (
             <div>
            <h1 key={i}>{thought.thought}</h1>
            <DeleteThought user={props.user}/>
            </div>
           ))
       ) : 
       <h1>no thoughts to display</h1>}  
        </div>
    )
}

export default ThoughtList