import styled from 'styled-components'

export const RecommendTopicWrapper = styled.div`
  margin-top:5px;
  display:flex;
  flex-wrap:wrap;

  .recommend-item {
    margin-bottom:5px;
    .top{

      &:nth-child(odd){
        margin-left:3px;
      }
      img {
        width:180px;
        border-radius:10px;
      }
    }
    
    .description {
      width:180px;
      overflow:hidden;
      white-space:nowrap;
      text-overflow:ellipsis;
    }

    .bottom{
      margin-top:15px;
      display:flex;
      justify-content:space-between;
      img {
        width:25px;
        height:25px;
        border-radius:50%;
      }
      .love{
        margin-left:5px;
      }
    }
  }

`







