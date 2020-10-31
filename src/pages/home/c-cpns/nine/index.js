import React, { memo, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getNineData } from '../../store/actionCreator'
import { NineWrapper } from './style'

export default memo(function Nine(props) {

  const { nineData } = useSelector(state => ({
    nineData: state.getIn(['home', 'nineData'])
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNineData())
  }, [dispatch])

  const [enNineData,setEnNineData] = useState(['article','science','raise','count','picture'])
  // console.log(nineData)

  return (
    <NineWrapper>
      {
        nineData.map((item, index) => {
          return (
            <Link key={item.title} className="nine-item" to={`/${enNineData[index]}`}>
              <img src={item.picUrl} alt="" />
              <p className="nine-title">{item.title}</p>
            </Link>
          )
        })
      }
    </NineWrapper>
  )
})
