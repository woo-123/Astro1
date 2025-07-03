import {type Doc,type SpiceXResponse} from '../types/api'


export const getLaunchByID = async ({id} : {id: string}) => {
 //podemos ejecutar el javascript 
 const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
 const launch = (await res.json()) as Doc
  
 return launch;
}

export const getLatestLaunches = async () => {
 //podemos ejecutar el javascript 
 const res = await fetch('https://api.spacexdata.com/v5/launches/query',{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify({
        query:{},
        option:{
            sort:{
                date_unix:"asc"
            },
            limit:2,
        }
    }),
 })
 const {docs} = await res.json() as SpiceXResponse

 return docs;
}
