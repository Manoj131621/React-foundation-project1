import Button from "./Button";
import './UserCard.css'

function UserCard({name,role}){
    return(
        <div className="card">
            <h3>{name}</h3>
            <p>{role}</p>
            <Button text="View Profile" variant="primary" 
            onClick={()=> alert(`Viewing-${name}`)}/>
        </div>
    )
}

export default UserCard;