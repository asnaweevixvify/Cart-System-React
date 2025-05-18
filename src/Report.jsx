import { useState } from 'react'
import './App.css'


function Report(props){
    const count = props.count
    const newCount = count.reduce((sum,e)=>{
        const newItem = sum+e
        return newItem
    },0)

    return(
            <div className="report-container">
                <h4 className='report-text'>สรุปคำสั่งซื้อ {newCount} รายการ จำนวนเงิน 8500 บาท</h4>
            </div>
    )
}

export default Report