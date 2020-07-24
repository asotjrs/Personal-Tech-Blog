import React from "react";
import {MasonryPost} from './index';

export default function PostMasonry(posts,columns,tags0nTop) {


return <section className={"masonry"} style={{gridTemplateColumns:`repeat(${columns},minmax(275px,1fr))`}} >
    {
        posts.map((post,index)=>{
            return <MasonryPost  {...{post,index,tags0nTop,key:index}} />

        })

    }
    </section>

};