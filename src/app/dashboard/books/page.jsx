import BookComponent from '@/components/book/BookComponent';
import axios from '@/libs/Axios'
import React from 'react'

async function Books() {
    const token = "1646|tpZqRxMVaukaPA7Qij7aGdVfSzlYTAR4adADIwRW";
    const books = await axios.get(
        '/api/books',
        {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    );

    console.log(books.data);
    return (
        <>
            <div className='bg-blue-500 p-8 text-slate-200 text-2xl'>Books</div>
            <div>
                <BookComponent/>
            </div>
        </>
    )
}

export default Books