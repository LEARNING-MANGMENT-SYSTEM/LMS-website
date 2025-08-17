import React from 'react'
import Dropdown from '../UI/Dropdown'
import { categoryOptions, CourseLevelOptions, DurationOptions, PriceOptions, RatingOptions, ToolsOptions } from './filtersList'

function Filters() {
  return (
    <div className='flex flex-col gap-6'>
        <Dropdown title='Categories' subMenuDirection='down' handleOption={()=>{}} options={categoryOptions}/>
        <Dropdown title='Tools' subMenuDirection='down' handleOption={()=>{}} options={ToolsOptions}/>
        <Dropdown title='Rating' subMenuDirection='down' handleOption={()=>{}} options={RatingOptions}/>
        <Dropdown title='Course level' subMenuDirection='down' handleOption={()=>{}} options={CourseLevelOptions}/>
        <Dropdown title='price' subMenuDirection='down' handleOption={()=>{}} options={PriceOptions}/>
        <Dropdown title='Duration' subMenuDirection='down' handleOption={()=>{}} options={DurationOptions}/>

    </div>
  )
}

export default Filters