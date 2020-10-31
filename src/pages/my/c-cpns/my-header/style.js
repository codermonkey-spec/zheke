import styled from 'styled-components'



export const MyHeaderWrapper = styled.div`
  height:120px;
  display:flex;
  justify-content:space-between;
  align-items:center;

  border-bottom:1px solid #ddd;

`


export const MyHeaderWrapperLeft = styled.div`
  margin-left:20px;

  h3{
    font-size:20px;
    font-weight:300;
  }

  p{
    margin-top:5px;
    font-size:16px;
    opacity:0.5;
  }

`

export const MyHeaderWrapperRight = styled.div`
  margin-right:20px;
  img {
    width:50px;
    height:50px;
    border-radius:50%;
    margin-right:10px;
  }
`












