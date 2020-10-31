import styled from 'styled-components'

export const NineWrapper = styled.div`
  margin-top:30px;

  display:flex;
  height:75px;
  justify-content:space-around;
  align-items:center;
  padding:0 10px;
  

  .nine-item{
    width:50px;
    height:50px;
    cursor: pointer;
  
    &:active{
      text-decoration:none;
    }

    img {
      width:100%;
      height:100%;
    }

    .nine-title{
      text-align:center;
      margin-top:6px;
    }
  }
 


`











