import React from 'react'
import styled from 'styled-components'


const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  margin-top: 30px;
`

const Box = styled.div`
  display: grid;
  box-shadow: 0 0 6px 0 rgba(58,58,58,0.24);
  width: 827px;
  height: 485px;
  border-top: 6px solid #4a90e2;
  grid-template: 30% 1fr / 1fr;
`

const InstructionsBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;

  p {
    font-size: 20px;
  }
`
function handleclick() {
    const apiKey = process.env.SALESLOFT_APPLICATION_ID;
    console.log("click")
    console.log(apiKey);
    const url = "https://api.salesloft.com/v2/users.json"
    fetch(url, {
        method: "GET",
        headers: {
            "Authorization": "Bearer ak_d9f0d439554e4b088db6794c3aae5d530ea94f146ec7cf2994d26d064ec9929d",
            "Cache-Control": "no-cache",
        },
        credentials: "include"
    }).then(function(response) {
        console.log(response.json());
        // response.status     //=> number 100–599
        // response.statusText //=> String
        // // response.headers    //=> Headers
        // response.url        //=> String

        // return response.text()
    }, function(error) {
        error.message //=> String
    })
    // var settings = {
    //     "async": true,
    //     "crossDomain": true,
    //     "url": "https://api.salesloft.com/v2/users.json",
    //     "method": "GET",
    //     "headers": {
    //         "Authorization": "Bearer ak_d9f0d439554e4b088db6794c3aae5d530ea94f146ec7cf2994d26d064ec9929d",
    //         "Cache-Control": "no-cache",
    //         "Postman-Token": "7570d001-e900-44ca-b111-656ffdc94b8f"
    //     }
    // }

}



const ChallengeCode = () => (
    <div>
    <h1>Hello World</h1>
<button  onClick={handleclick}>GetPeople</button>
</div>
)


export const Challenge = () => (
<ChallengeCode  />
);
