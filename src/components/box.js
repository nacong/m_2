import React from 'react';

const Box = () => (
    <div class="artist">
        <div id="mdtibox">
            <p id="title">제목입니다열글자글자</p>
            <p id="artist_2">·아티스트·</p>
            <div id="img-padding">
                <img alt="" id="img" src="https://source.unsplash.com/512x512/?graphic"></img>
                <div id="tags">
                    <div id="tag" style={{backgroundImage: "linear-gradient(135deg, #ecebff, #f5f4fe)", color: "#87ceeb"}}>하늘색</div>
                    <div id="tag" style={{backgroundImage: "linear-gradient(135deg, #f0fff0, #e6ffe6)", color: "#008000"}}>초록색</div>
                    <div id="tag">실사</div>
                    <div id="tag">수평구도</div>
                    <div id="tag">풍경</div>
                    <div id="tag">아무태그</div>
                </div>
            </div>
        </div>
    </div>
)

export default Box;