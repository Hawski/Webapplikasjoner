
const Food = ({food}) => {
    return (
        <ul>
            {food.map((value) => (
                <li key={value}>
                    {value}
                </li>
            ))}
        </ul>
    )
}

export default Food;