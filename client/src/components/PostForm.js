import React,{useState} from "react";

export function PostForm(props){
    const [url,setUrl] = useState("");
    const [caption,setCaption] = useState("");
    function changeUrl(e){
        setUrl(e.target.value);
    }
    function changeCaption(e){
        setCaption(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        props.addNewPost(props.id,{url,caption})
        .then(res=>{
            props.history.push("/");
        })
    }
    return(
        <div className="AuthForm">
            <h1>New Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="url">Url</label>
                    <input type="text" className="form-control" name="url" vlaue={url} onChange={changeUrl} id="url" placeholder="Paste Your Post URL here" size="50"/>
                </div>
                <div className="form-group">
                    <label htmlFor="caption">Caption</label>
                    <input type="text" className="form-control" name="caption" vlaue={caption} onChange={changeCaption} id="caption" placeholder="Enter Caption"/>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </div>
    )
}