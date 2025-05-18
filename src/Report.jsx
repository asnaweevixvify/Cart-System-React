import { useState } from 'react'
import './App.css'


function Report(props){
    const count = props.count
    const price = props.price

    const amoutSplit = count.map((e,index)=>{
        const amout = e*price[0][index]
        return amout
    })

    const newCount = count.reduce((sum,e)=>{
        const newItem = sum+e
        return newItem
    },0)

    const amount = amoutSplit.reduce((value,e)=>{
        const total = value + e
        return total
    },0)
    
    return(
            <div className="report-container">
                <h4 className='report-text'>สรุปคำสั่งซื้อ {newCount} รายการ จำนวนเงิน {amount} บาท</h4>
            </div>
    )
}

export default Report