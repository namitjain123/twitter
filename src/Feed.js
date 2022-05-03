import React,{use} from 'react';
import "./Feed.css";
import Post from "./post";
import TweetBox from './TweetBox';

function Feed (){
    return (
        <div className='feed'>
            {/*header */}
            <div className='feed__header'>
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox/>

            {/*Post*/}
            <Post 
             displayName="Namit Jain"
              username= " namitj"
               verified={true}
               text="YOO its working"
                avatar="https://twitter.com/NamitJa72498874/photo "
                image=" https://twitter.com/SawyerMerritt/status/1521282039756079104/photo/1"/>
            
            

        </div>
    );
}
export default Feed;