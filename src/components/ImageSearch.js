import React, {useState} from 'react'

function ImageSearch({searchText}) {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }
    return (
        <div className="image-search">
            <form onSubmit={onSubmit}>
                <input type="text" onChange={e=>setText(e.target.value)} placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default ImageSearch
