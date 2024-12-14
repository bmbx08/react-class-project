const handleInputChange=(e,setUserInputObj)=>{
    if(e.target.name==="hour"){
        if(e.target.id==="방콕"){
            setUserInputObj(prevState=>({
                ...prevState,
                Bangkok:{
                    ...prevState.Bangkok,
                    hour: Number(e.target.value),
                }
            }))
        }
        if(e.target.id==="두바이"){
            setUserInputObj(prevState=>({
                ...prevState,
                Dubai:{
                    ...prevState.Dubai,
                    hour: Number(e.target.value),
                }
            }))
        }
        if(e.target.id==="알래스카"){
            setUserInputObj(prevState=>({
                ...prevState,
                Alaska:{
                    ...prevState.Alaska,
                    hour: Number(e.target.value),
                }
            }))
        }
        if(e.target.id==="호주"){
            setUserInputObj(prevState=>({
                ...prevState,
                Aussie:{
                    ...prevState.Aussie,
                    hour: Number(e.target.value),
                }
            }))
        }
    }

    if(e.target.name==="minute"){
        if(e.target.id==="방콕"){
            setUserInputObj(prevState=>({
                ...prevState,
                Bangkok:{
                    ...prevState.Bangkok,
                    minute: Number(e.target.value),
                }
            }))
        }
        if(e.target.id==="두바이"){
            setUserInputObj(prevState=>({
                ...prevState,
                Dubai:{
                    ...prevState.Dubai,
                    minute: Number(e.target.value),
                }
            }))
        }
        if(e.target.id==="알래스카"){
            setUserInputObj(prevState=>({
                ...prevState,
                Alaska:{
                    ...prevState.Alaska,
                    minute: Number(e.target.value),
                }
            }))
        }
        if(e.target.id==="호주"){
            setUserInputObj(prevState=>({
                ...prevState,
                Aussie:{
                    ...prevState.Aussie,
                    minute: Number(e.target.value),
                }
            }))
        }
    }

    if(e.target.name==="period"){
        if(e.target.id==="방콕"){
            setUserInputObj(prevState=>({
                ...prevState,
                Bangkok:{
                    ...prevState.Bangkok,
                    period: e.target.textContent,
                }
            }))
        }
        if(e.target.id==="두바이"){
            setUserInputObj(prevState=>({
                ...prevState,
                Dubai:{
                    ...prevState.Dubai,
                    period: e.target.textContent,
                }
            }))
        }
        if(e.target.id==="알래스카"){
            setUserInputObj(prevState=>({
                ...prevState,
                Alaska:{
                    ...prevState.Alaska,
                    period: e.target.textContent,
                }
            }))
        }
        if(e.target.id==="호주"){
            setUserInputObj(prevState=>({
                ...prevState,
                Aussie:{
                    ...prevState.Aussie,
                    period: e.target.textContent,
                }
            }))
        }
    }
}

export default handleInputChange;