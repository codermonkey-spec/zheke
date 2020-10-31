import styled from 'styled-components'

export const CommunityBannerWrapper = styled.div`
  /* display:flex; */
  overflow-x:scroll;
  white-space:nowrap;
  scrollbar-width: none; // firefox下滚动条不显示
  -ms-overflow-style:none; // IE下滚动条不显示
    //设置侧边栏滚动条不显示 chrome
  &::-webkit-scrollbar {
    display: none;
  }

  a{
    display:inline-block;
    width:120px;
    /* height:50px; */
    margin:0 5px;

    img {
      width:100%;
      height:100%;
    }
  }

  a:nth-child(1){
    margin-left:-10px;
  }

  a:nth-child(2){
    display:inline-block;
    width:150px;
  }


`











