import React from "react"
import Book from "./Book"

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numofpage={300}></Book>
            <Book name="처음 만난 AWS" numofpage={400}></Book>
            <Book name="처음 만난 리액트" numofpage={500}></Book>
        </div>
    );
}

export default Library;