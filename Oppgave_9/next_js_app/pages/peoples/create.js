import Head from "next/dist/shared/lib/head"
import Navigation from "../../components/Navigations"
import axios from "axios"
import { useState, useEffect } from "react"

const CreatePeople = () => {
    const [poepleList, setPeopleList] = useState([]);
    const [err, setErr] = useState(null);
    const [person, setPerson] = useState(''); //id
    const [firstName, setFirstName] = useState(''); //first name
    const [lastName, setLastName] = useState(''); //last name
    const [gender, setGender] = useState(''); //gender name

    const handlePersonChangeID = (event) => {
        setPerson(event.target.value)
    }

    const handlePersonChangeFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const handlePersonChangeLastName = (event) => {
        setLastName(event.target.value)
    }

    const handlePersonChangeGender = (event) => {
        setGender(event.target.value)
    }

    const createPeopleList = async () => {
        try {
            const response = await axios.post('/api/peoples',
                { "id": person, "info": {
                     "f-Name": firstName,
                     "l-Name": lastName,
                     "gender": gender}})
            console.log(response.data)
                
            if (response?.data?.success){
                setPeopleList(response.data.data)
            }
        } catch (error){
            setErr(error?.response?.data?.err)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await createPeopleList()
    } 

    const getPeopleList = async () => {
        try {
            const response = await axios.get('/api/peoples')
            console.log(response.data)
                
            if (response?.data?.success){
                setPeopleList(response.data.data)
            }
        } catch (error){
            setErr(error?.response?.data?.err)
        }
    }

    useEffect(() => {
        getPeopleList()
    }, [])

    if (err) {
       return <p>Noe gikk galt: {err}</p>
    }

    return (
        <div>
            <Head>
                <title>Add people-list</title>
            </Head>

            <div>
                <h1>Add people to the list</h1>
                <Navigation />
            </div>

            <p>-----------------------------------------------------------------------------</p>
            <section>{JSON.stringify(poepleList)}</section>
            <p>-----------------------------------------------------------------------------</p>

            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="id">Person ID: </label>
                    <input id="id" type="text" name="id" value={person} onChange={handlePersonChangeID}/>
                </div>

                <div>
                    <label htmlFor="fname">First name: </label>
                    <input id="fname" type="text" name="fname" value={firstName} onChange={handlePersonChangeFirstName}/>
                </div>

                <div>
                    <label htmlFor="lname">Last name: </label>
                    <input id="lname" type="text" name="lname" value={lastName} onChange={handlePersonChangeLastName}/>
                </div>

                <div>
                    <label htmlFor="gender">Gender: </label>
                    <input id="gender" type="text" name="gender" value={gender} onChange={handlePersonChangeGender}/>
                </div>

                <button type="submit">Add person</button>            
            </form>
        </div>
    )
}

export default CreatePeople