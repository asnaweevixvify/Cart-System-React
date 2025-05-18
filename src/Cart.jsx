import { useState , useEffect } from 'react'
import './App.css'
import cartData from './Data'

function Cart(props){
    const [data,setData] = useState(cartData)
    const [count,setCount] = useState(Array(cartData.length).fill(1))
    const price = cartData.map((e)=>{
        return e.price
    })
    const [hide,showHide] = useState(false)

    useEffect(()=>{
        props.getCount(count)
        props.getPrice(price)
    },[])

    useEffect(()=>{
        const newCount = count.filter((e,index)=>{
            return e===0
        })
        if(newCount.length === cartData.length){
            showHide(true)
        }
    },[count])

    return(
        <div className="cart-container">
            <div className="list-container">
                <ul className='list topic'>
                    <li>รูปภาพ</li>
                    <li>ชื่อสินค้า</li>
                    <li>ราคา</li>
                    <li>จำนวน</li>
                    <li>ลบรายการ</li>
                </ul>
            </div>
            {hide && <h1 className='notfound'>ไม่มีสินค้า</h1>}
            {data.map((item, index) => {
                if (count[index] === 0){
                    return null
                }

                return (
                    <div className="list-container" key={index}>
                        <ul className="list">
                            <li>
                                <img src={item.url} alt={item.name} />
                            </li>
                            <li>{item.name}</li>
                            <li>{item.price}</li>
                            <li className="count-container">
                                <i
                                    className="fa-solid fa-minus fa-xs"
                                    onClick={() => decrease(index)}
                                ></i>
                                <h4>{count[index]}</h4>
                                <i
                                    className="fa-solid fa-plus fa-xs"
                                    onClick={() => increase(index)}
                                ></i>
                            </li>
                            <li>
                                <i className="fa-solid fa-minus fa-lg del"
                                onClick={()=>delBtn(index)}></i>
                            </li>
                        </ul>
                    </div>
                    
                );
            })}

        </div>
    )

    function increase(i){
        const newCount = [...count]
        newCount[i] = newCount[i]+1
        setCount(newCount)
        props.getCount(newCount)
    }
    function decrease(i){
        const newCount = [...count]
        newCount[i] = newCount[i]-1
        setCount(newCount)
        props.getCount(newCount)
    }
    function delBtn(index){
        const newCount = [...count]
        newCount[index] = 0
        setCount(newCount)
        props.getCount(newCount)
    }
}

export default Cart