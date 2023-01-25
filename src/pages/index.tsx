import React from 'react';

import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import ProductCard from 'components/Card';
import 'styles/index.css';

function App() {
  

  return (
    <Layout>
      <div className='w-full h-screen bg-white'>
      <Navbar />
      <div className="w-full h-screen flex overflow-auto  bg-white">
        <div className="w-full hp-screen">
          <div className="flex-1 bg-white">
            <h2
                className='mb-10'
                style={{
                  fontFamily: "Poppins",
                  fontSize: "1.75em",
                  fontWeight: "700",
                  textAlign: "center",
                  color: "#000000",
                }}
              >
                All Product
            </h2>
          </div>
          <div className="grid grid-cols-5 gap-10">
            {[...Array(20)].map((e) => (
                <ProductCard
                />
              ))}
          </div>
        </div>
      </div>
      </div>
    </Layout>             
  )
}

export default App;
