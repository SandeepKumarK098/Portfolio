import './Card.css'

export default function Card (props) {
    return (
        <div className="card">
            <h1 className="name">{props.name}</h1>
            <p className="p">{props.desc}</p>
        </div>
    );
}

