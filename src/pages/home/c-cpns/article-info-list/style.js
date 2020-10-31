import styled from 'styled-components'

export const ArticleInfoListWrapper = styled.div`

  margin-top:15px;
  font-size:12px;

  .article-item{
    display:flex;
    align-items:center;
    margin:10px 0;
    border-top:1px solid #ddd;
    padding-top:5px;

    .left {
      img{
        width:70px;
      }
    }
    .right{
      margin-left:10px;
      margin-top:7px;

      .title{
        font-size:14px;
        font-weight:600;
      }

      h3{
        margin-top:5px;
      }
      .description{
        margin-top:5px;
        opacity:0.5;
      }

      .bottom{
        display:flex;
        opacity:0.5;

        .time{
          margin-left:8px;
        }
      }
    }

  }

  .article-item:nth-child(4){
    img {
      width:75px;
      height:65px;
      margin-left:-15px;
    }
  }

`








