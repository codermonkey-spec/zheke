import styled from 'styled-components'

export const HotTopicWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin:5px 10px;

  .hot-topic-item {
    width:50%;
    display:flex;
    /* margin-left:5px; */
    img {
      height:50px;
    }
    .description {
      margin-left:5px;
      font-size:12px;

      .time {
        opacity:0.5;
        margin-top:3px;
      }
    }
  }

`










