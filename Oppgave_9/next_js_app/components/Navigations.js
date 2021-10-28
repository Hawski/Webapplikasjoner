import Link from 'next/link'

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/peoples">People list</Link>
                </li>
                <li>
                    <Link href="/peoples/create">Add people</Link>
                </li>
                <p>API</p>
                <li>
                    <Link href="http://localhost:3000/api/peoples">People API Json file</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation