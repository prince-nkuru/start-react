import { useState,useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = uuseState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(res => {
      if (!res.ok){
        
        throw Error ('could not fetch data for that resources')

      }
      return res.json()
    
    })
    .then(data =>{
      setData(data)
      setIsPending(false)
      setError(null)
    })
    .catch(err => {
      setIsPending(false)
      setError(err.message)
    })
  }, [url])

  return {data, isPending,error}
}

export default useFetch;