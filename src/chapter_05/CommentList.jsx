import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "한동길",
        comment: "안녕하세요. 한동길입니다."
    },
    {
        name: "한동길2",
        comment: "안녕하세요. 한동길2입니다."
    },
    {
        name: "한동길3",
        comment: "안녕하세요. 한동길3입니다."
    },
]


 function CommentList(props) {
    return (
        <div>
            {comments.map((foo) => {
            return (
            <Comment name={foo.name} Comment={foo.comment}/>
            )
        })}
        </div>
    )
 }

 export default CommentList;