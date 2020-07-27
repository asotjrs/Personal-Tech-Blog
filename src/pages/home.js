import React from "react";
import trending from '../assets/mocks/trending';
import {MasonryPost, PostMasonry,PostGrid} from '../components/common';
import featured from "../assets/mocks/featured";
const featuredConfig={
    0:{
        gridArea:'1/1/2/3',
        height:'300px'
    },
    1:{
        height: '300px'
    },
    3:{
        height:'630px',
        marginLeft:'30px',
        width:'630px'
    }
};

const trendingConfig={
    1:{
        gridArea:'1/2/3/3'
    }
};


const mergStyles=(posts,config)=>{
posts.forEach((post,index)=>{
    post.style=config[index];
    post.author="Djafer Abdelhadi";
    post.description="this desc will be chnged soon , so please consider waiting for that"
})

};
const recentPosts=[...featured,...trending,...trending];

mergStyles(trending,trendingConfig);
mergStyles(featured,featuredConfig);
const lastFeatured=featured.pop();
export default function Home(){
    return (
        <main className={"home"}>
            <section className={"container "}>
                <div className={"row"}>
                    <section className={"featured-post-container"}>
                        <PostMasonry posts={featured} columns={2} tags0nTop={true}/>
                        <MasonryPost post={lastFeatured}  tags0nTop={true}/>
                    </section>
                </div>
            </section>


            <section className={"bg-white"}>

            <section className={" featured-post container "}>
                <div className={"row"}>
                    <h1>Recent Posts</h1>
                    <PostGrid posts={recentPosts}/>

                </div>
            </section>

            </section>

            <section className={"container"}>
                <div className={"row"}>
                    <PostMasonry posts={trending} columns={3}/>

                </div>
            </section>


        </main>



    )
};