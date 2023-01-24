import React, {useEffect, useState} from "react";
import BotsItems from "../bots/BotsItems";
import MyBotsItem from "../bots/MyBotsItem";


const BOTS_API = "https://json-server-vercel-34ln.vercel.app/api/bots"

function Home(){
    
    const [myBots, setMyBots] = useState([])
    const [bots, setBots] = useState([])
    const [botsIds, setBotsIds] = useState([])


    useEffect(()=>{
        fetch(BOTS_API)
        .then((response)=>response.json())
        .then((data)=>setBots(data))

    },[])

    function handleDelete(ids){

        fetch(`${BOTS_API}/${ids}`,{
            method:"DELETE"
        })

    }

    function deleteTodo(ids,id) {
        const updatedTransactions = myBots.filter(todo => todo.id !== id)
        const updatedTransaction = botsIds.filter(todo => todo !== ids)
        setMyBots(updatedTransactions)
        setBotsIds(updatedTransaction)
    }

    const myBotsItems = myBots.map(
        (botItem)=> 
        <MyBotsItem
            id={botItem.id}
            key={`myBots_`+botItem.id}
            name={botItem.name}
            health={botItem.health}
            damage={botItem.damage}
            armor={botItem.armor}
            bot_class={botItem.bot_class}
            catchphrase={botItem.catchphrase}
            avatar_url={botItem.avatar_url}
            created_at={botItem.created_at}
            updated_at={botItem.updated_at}
            onDelete={handleDelete}
            onDeleteTodo={deleteTodo}
        />
        )



    const botsItems = bots.map(
        (botItem)=><BotsItems 
            id={botItem.id}
            key={`bots_`+botItem.id}
            name={botItem.name}
            health={botItem.health}
            damage={botItem.damage}
            armor={botItem.armor}
            bot_class={botItem.bot_class}
            catchphrase={botItem.catchphrase}
            avatar_url={botItem.avatar_url}
            created_at={botItem.created_at}
            updated_at={botItem.updated_at}
            onSetMyBots={setMyBots}
            onMyBots = {myBots}
            onBotsIds = {botsIds}
            onSetBotsIds = {setBotsIds}
            onDelete={handleDelete}
            onDeleteTodo={deleteTodo}
        />)

    return(

        <div className="container mt-4 cols-2">
            <h1>My Bot Army</h1>
            <div className="row">
                {myBotsItems}
            </div>
            
            <h1>Bot Collection</h1>
            <div className="row">
                {botsItems}
            </div>
        </div>


    )
}
export default Home;