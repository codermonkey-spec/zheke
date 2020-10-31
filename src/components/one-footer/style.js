import styled from 'styled-components'

export const OneFooterWrapper = styled.div`
  display:flex;
  justify-content:space-around;
  align-content:center;
  background-color:#fff;
  height:60px;
  position:relative;
  bottom:0;
  width:100%;
  /* height:100%; */
  .icon-info{
    width:25px;
    height:25px;
    margin:15px;
    
    a{
      display:block;
      width:100%;
      height:100%;
    }

    img {
      width:100%;
      height:100%;
    }

    .title{
      margin-left:3px;
      margin-top:2px;
      font-weight:300;
    }
  }

  .icon-info:nth-child(3){
      width:35px;
      height:35px;
  }

`









