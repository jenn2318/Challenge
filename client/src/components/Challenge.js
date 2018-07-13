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
    console.log("click")
    // $('#getPeople').on('click', function () {
    //     console.log('click');
        $.ajax({
            url: 'https://api.salesloft.com/v2/accounts.json',
            type: "GET",
            beforeSend: function (request) {
                request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
                request.setRequestHeader("Authorization", '');
            },
            success: handleSuccess,
            error: handleError
        });

        function handleSuccess(response) {
            console.log('success', response);
        }

        function handleError(jqXHR, exception) {
            console.log('status', jqXHR.status);
            console.log('exception', exception);
            console.log('message', jqXHR.responseText);
        }

    // });
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
