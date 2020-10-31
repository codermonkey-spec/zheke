import styled from 'styled-components'



export const MyBannerWrapper = styled.div`
  
  margin:12px 8px 0 8px;
  

  .dots {
    bottom: -25px;
    li {
      width: 10px;
      height: 10px;
      display: flex;
      align-items: center;

      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }

    li.slick-active {
      width: 10px;
      button {
        background-color: #b5b5b5;
      }
    }
  }

  .banner{
    height:200px;
    padding:0 8px;
    

    img {
      width:100%;
      height:100%;
    }
    img:nth-of-type(1){
      border-radius:15px;
    }
  }

`








