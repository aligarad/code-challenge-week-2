import React, {useRef} from "react"; 


const BOTS_API = "https://json-server-vercel-34ln.vercel.app/api/bots"

function BotsItems({
    avatar_url,
    name, 
    health, 
    damage, 
    armor, 
    bot_class,
    id,
    onSetMyBots,
    onMyBots,
    onBotsIds, 
    onSetBotsIds,
    onDelete,
    onDeleteTodo
}){

    const elementRef = useRef();

    function handleClickBot(){
        const botCard = elementRef.current
        const ids = (botCard.id)
        fetch(`${BOTS_API}/${botCard.id}`)
        .then((response)=>response.json())
        .then((data)=>{
            sort(data, ids)     
        })
    }

    function sort(data, ids){
        if(onBotsIds.includes(ids)){
            onSetMyBots([...onMyBots])
        }else{
            onSetMyBots([...onMyBots, data])
            onSetBotsIds([ ...onBotsIds,ids])
        }
    }

    function onSelectedDelete(){
        const botCard = elementRef.current
        const ids = (botCard.id)
        onDelete(ids)
        onDeleteTodo(ids, id)
    }



    return(
        <div className="col-3  p-1">
                                   
            <div ref={elementRef} id={id}  className="card h-100">      
            <button id={id} ref={elementRef} onClick={onSelectedDelete} className="button ms-auto bg-danger">x</button>       
                <img onClick={handleClickBot} className="card-img-top" src={avatar_url} alt="bot image"></img>

                <div onClick={handleClickBot} className="card-body">
                    <h5 className="card-title">{`Name: ${name}`}</h5>
                    <h6 className="card-title">{`Class: ${bot_class}`}</h6>
                    <p className="card-text">
                    <small className="text-muted">
                        { `health: ${health}`}  
                        { `armor: ${armor}`}  
                        { `damage: ${damage}` }  
                    </small>
                    </p> 
                </div>                          
            </div>            
        </div>
    )

}
export default BotsItems;