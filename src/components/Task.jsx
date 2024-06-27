export default function Task( {task} ) {
    return (
        <div
            style={{
                padding: '8px',
                margin: '0 0 8px 0',
                border: '1px solid lightgrey',
                borderRadius: '2px',
                backgroundColor: 'white',
            }}
        >
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p>{task.priority}</p>
        </div>
    );
}