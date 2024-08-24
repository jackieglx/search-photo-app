import React from 'react'
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useGlobalContext} from "./context.jsx";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;
// console.log(import.meta.env.VITE_API_KEY);

const Gallery = () => {
    const {searchTerm, setSearchTerm} = useGlobalContext();
    const response = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const resp = await axios.get(`${url}&query=${searchTerm}`);
            return resp.data;
        },
    })
    // console.log(response)
    if (response.isLoading) {
        return (
            <section className="image-container">
                <h4>Loading...</h4>
            </section>
        );
    }
    if (response.isError) {
        return (
            <section className="image-container">
                <h4>There was an error.</h4>
            </section>
        );
    }

    const results = response.data.results;
    if (results.length === 0) {
        return (
            <section className="image-container">
                <h4>No results found...</h4>
            </section>
        );
    }
    return (
        <section className="image-container">
            {results.map((item) => {
                const url = item?.urls?.regular;
                return (
                    <img src={url}
                         key={item.id}
                         alt={item.alt_description}
                         className="img"/>
                );
            })}
        </section>
    )
}
export default Gallery
