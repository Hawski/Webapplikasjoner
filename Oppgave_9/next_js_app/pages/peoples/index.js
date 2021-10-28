import Head from "next/dist/shared/lib/head"
import Navigation from "../../components/Navigations"
import axios from "axios"
import { useState, useEffect } from "react"

const People = () => {
    const [poepleList, setPeopleList] = useState([]);

    const getPeopleList = async () => {
        try {
            const response = await axios.get('/api/peoples')
            console.log(response.data)
                //response?.data?.success
                //response.statusText == "OK"
            if (response?.data?.success){
                setPeopleList(response.data.data)
            }
        } catch (error){
            console.log(error?.response?.data)
        }
    }

    useEffect(() => {
        getPeopleList()
    }, [])

    return (
        <div>
            <Head>
                <title>People list</title>
            </Head>

            <div>
                <h1>List of all the people</h1>
                <Navigation />
            </div>

            <p>-----------------------------------------------------------------------------</p>
            <section>{JSON.stringify(poepleList)}</section>
            <p>-----------------------------------------------------------------------------</p>
        </div>
    )
}

export default People