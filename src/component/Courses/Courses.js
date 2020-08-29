import React, { useState } from 'react';
import FakeData from '../FakeData/courseDetails';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
const Courses = () => {
    const RandomData = FakeData;
    const [courses] = useState(RandomData);
    const [cart , setCart] =useState([]);
    
    const AddEvent = (item) => {
        const newCart = [...cart ,item];
        setCart(newCart);
        }
        const totalPrice = cart.reduce((total,current) => total + current.price,0);
    return (
        <div className="container">
            <div>
            <h2 className ="text-center ">All Courses</h2>
            </div>
            <div>
                {
               courses.map(course => <Item course={course} AddEvent={AddEvent} />)
               }   
            <div >
              
              
        </div>
        <div className ="text-center" style={{width:"400px",paddingTop:"300px"}}>
                <h2>Order summery : {cart.length}</h2>
                
               <button type="button" className="btn btn-primary">TotalPrice :<span > ${totalPrice}</span>
               </button>
               </div>
               <div style={{paddingTop:"25px"}}>
               <ul style={{width:"300px"}}>
                   {
                   cart.map(cart => <Cart cart={cart} /> )
                   }
               </ul>
               </div>
              </div>
       
    </div>
    );
};

export default Courses;