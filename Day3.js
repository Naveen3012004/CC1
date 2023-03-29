import React from "react";

function Category(props){
    return(
        <div>
            <p>{props.name} - Rs.{props.price}</p>
        </div>
    )
}

const tea=10;
const milk=60;
const coffee=20;
const custard=150;
const cake=70;
const pie=200;


export default function Day4(){
    const [count,setCount]=React.useState(0);
    const [price,setPrice]=React.useState(0);
   const Coffee=()=>{
     setCount(count+1);
     setPrice(price+coffee);
   }
   const milkshake=()=>{
    setCount(count+1)
    setPrice(price+milk)
  }
  const Tea=()=>{
    setCount(count+1)
    setPrice(price+tea)
  }
  const Apple=()=>{
    setCount(count+1)
    setPrice(price+pie)
  }
  const cakes=()=>{
    setCount(count+1)
    setPrice(price+cake)
  }
  const caramel=()=>{
    setCount(count+1)
    setPrice(price+custard)
  }
 

    return(
       
            <div>
            <h1 id="heading">~ Munniyandi villas ~</h1>
            <h5 style={{textAlign:"right",marginRight:550}}>owned by naveen group of companies</h5>
            <hr/>
            <div>
           
            <header>
            <a href="htt">Home</a>
            <a href="kjbjh">Menu</a>
            <a href="kijvu">About</a>
            <a href="bkjv">My Orders</a>
            </header>
            </div>
            <hr/>
            <div className="section">
                <div>
                <h3>Beverages</h3>
                <Category name = "Coffee" price = {coffee} />
                <button onClick={Coffee}>Add to cart</button>
                <Category name = "Tea" price = {tea} />
                <button onClick={Tea}>Add to cart</button>
                <Category name = "Milkshake" price = {milk} />
                <button onClick={milkshake}>Add to cart</button>
                </div>
                <div>
                <h3>Pastries</h3>
                <Category name = "Apple pie" price = {pie} />
                <button onClick={Apple}>Add to cart</button>
                <Category name = "Cake" price = {cake}/>
                <button onClick={cakes}>Add to cart</button>
                <Category name = "Caramel custard" price = {custard}/>
                <button onClick={caramel}>Add to cart</button>
                </div>
            </div>
            <div className="cart">
                <img  className="logo" src="data:image/jpeg;base64,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" alt="cart_logo"/>
                <h4>Total = {count}</h4>
                <h4>Price={price}</h4>
            </div>
            </div>
        )
    
}
