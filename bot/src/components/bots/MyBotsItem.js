import React, {useRef} from "react";

function MyBotsItem({
    avatar_url,
    name, 
    health, 
    damage, 
    armor, 
    bot_class,
    created_at,
    updated_at,
    catchphrase,
    id,
    onDelete,
    onDeleteTodo
}){
    const myBotsElementRef = useRef();

    function handleRemoveBot(){
        console.log("hello")
        const myBotCard = myBotsElementRef.current
        const ids =(myBotCard.id)
        onDeleteTodo(ids,id)
    }

    function onDeleteSelected(){
        const myBotCard = myBotsElementRef.current
        const ids =(myBotCard.id)
        onDelete(ids)
        onDeleteTodo(ids, id)
    }




    return(
        <div className="col-3  p-1">
        
        <div id={id} ref={myBotsElementRef} className="card h-100">
        <button ref={myBotsElementRef} onClick={onDeleteSelected} className="bg-danger ms-auto button">x</button>
            <img onClick={handleRemoveBot} className="card-img-top" src={avatar_url} alt="bot image"></img>
            <div onClick={handleRemoveBot} className="card-body">
                <h5 className="card-title">{`Name: ${name}`}</h5>
                <h6 className="card-title">{`Class: ${bot_class}`}</h6>
                <p className="card-text">{catchphrase}</p> 
                {/* <p className="card-text">
                <small className="text-muted">
                    { `health: ${health}`}  
                    { `armor: ${armor}`}  
                    { `damage: ${damage}` }  
                </small>
                </p> 
                <p className="card-text">
                <small className="text-muted">
                    {`created_at: ${created_at}`}
                    { `updated_at: ${updated_at}`}
                </small>
                </p> */}
            </div>             
        </div>
    </div>
    )

}

export default MyBotsItem;