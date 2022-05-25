
import axios from 'axios';
import { useEffect, useState } from 'react'
import { setDate } from 'date-fns'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const endpoint = process.env.REACT_APP_BASE_URL
                const res = await axios.get(endpoint + url);

                setData(res.data);
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        };
        fetchData()
    }, [url])
    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setDate(res.data);
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    };

    return { data, loading, error, reFetch }
}

export default useFetch