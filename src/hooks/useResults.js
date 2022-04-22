import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {


    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (search) => {
        // console.log('Hi 11')
        // console.log(errorMessage)
        try {
            setResults([])
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: search,
                    location: 'san jose'
                }
            })
            setErrorMessage('')
            setResults(response.data.businesses)
        } catch (err) {
            console.log(err)
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('Indian')
    }, [])

    return [searchApi, results, errorMessage]

}