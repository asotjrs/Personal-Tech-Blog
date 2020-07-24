import React from "react";
import {categoryColors} from './styles'
export default function MasonryPost({post,tags0nTop}) {
    const style={
        backgroundImage:`url(${require(`../../assets/images/${post.image}`)})`
    };
    return <a className={"masonry-post overlay"} style={style} href={post.link}>
        <div className={"image-text"}>
            <div className={"tags-container"}>
                {
                    post.categories.map((tag,ind)=>{
                        return <span key={ind} className={"tag"} style={{backgroundColor:[categoryColors[tag]]}}>
                            {tag.toUpperCase()}
                        </span>
                    })
                }
            </div>
            <div>
                <h2 className={"image-title"}>
                    {post.title}
                </h2>
                <span className={"image-date"}> {post.data} </span>

            </div>
        </div>
    </a>
}
