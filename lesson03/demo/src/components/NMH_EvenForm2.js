import React from 'react'

export default function NMH_EventForm2() {

    // Định nghĩa các hàm xử lý sự kiện
    const eventHandleClick1 = (content)=>{
        console.log('====================================');
        console.log(content);
        console.log('====================================');
    }
  return (
    <div className='alert alert-success'>
      <h2>Event Demo - Function Component</h2>
        <button onClick={eventHandleClick1("NguyenMinhHiep")}>Gọi khi render</button>
        <button onClick={()=>eventHandleClick1("K22CNT1-ReactJs")}>Gọi khi click </button>
    </div>
  )
}