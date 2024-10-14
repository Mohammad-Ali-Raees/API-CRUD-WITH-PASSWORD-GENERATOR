import React, { useEffect, useState } from 'react'
import SkeletonLoading from './SkeletonLoading'
import Card from './Card';

const SkeletonReact = () => {


    const [Loading, SetLoading] = useState(true)
    const [articles, setArticles] = useState([]);

    

    const GetArticles = () => {
        setTimeout(async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
            const data = await res.json();
            setArticles(data);
            SetLoading(false);
        }, 5000);

    }

    useEffect(() => {
        GetArticles();
    }, []);





    return (
        <div className='container'>
            <div className='row justify-content-center'>


                {
                    Loading ? (
                        Array(10).fill(10).map((elem, index) => {
                            return (
                                <div className='col-md-3 mt-4' key={index}>
                                    <SkeletonLoading />
                                </div>
                            )
                        })
                    ) : (
                        articles.map((elem) => {
                            return (
                                <div className='col-md-3 mt-4' key={elem.id}>
                                    <Card body={elem.body} title={elem.title} id={elem.id} />
                                </div>
                            )
                        })
                    )
                }





            </div>

        </div>
    )
}

export default SkeletonReact