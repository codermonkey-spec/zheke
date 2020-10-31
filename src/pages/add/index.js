import React, { memo } from 'react'

import OneHeader from '@/components/one-header'
import {AddWrapper} from './style'


export default memo(function Add() {
  return (
    <AddWrapper>
      <OneHeader title="发表文章" />
    </AddWrapper>
  )
})
