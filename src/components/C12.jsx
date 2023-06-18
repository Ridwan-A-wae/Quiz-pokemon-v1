import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';

function C12() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    if (buttonIndex === 0) {
      alertTrue();
    }
  };

  const alertTrue = () => {
    Swal.fire('Good job!', 'ยินดีด้วย!! คุณตอบถูก', 'success');
  };

  useEffect(() => {
    const loadPoke = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/34`);
        setPoke(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPoke();
  }, []);

  return (
    <div className="block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  ">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        <h1 style={{ fontSize: "40px" }}>โปเกม่อนตัวนี้</h1>
        <h2 style={{ fontSize: "40px" }}>ชื่อว่าอะไร</h2>
        <br />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <button className={`btn ${selectedButton === 1 ? 'btn-danger' : 'btn-primary'} mx-2`} onClick={() => handleButtonClick(1)}>Magmar</button>
          <button className={`btn ${selectedButton === 0 ? 'btn-success' : 'btn-primary'} mx-2`} onClick={() => handleButtonClick(0)}>Nidoking</button>
          <button className={`btn ${selectedButton === 2 ? 'btn-danger' : 'btn-primary'} mx-2`} onClick={() => handleButtonClick(2)}>Seadra</button>
          <button className={`btn ${selectedButton === 3 ? 'btn-danger' : 'btn-primary'} mx-2`} onClick={() => handleButtonClick(3)}>Marowak</button>

        </div>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ReactLoading type="spin" color="black" width={'20%'} height={'20%'} />
          </div>
        ) : (
          <div>
            {poke && (
              <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.species.name} />
            )}
          </div>
        )}
      <div style={{width:"100%"}}>
        <Link style={{width:"80%"}} className='btn btn-primary ' to={'/c13'}>Next</Link>
        <Link style={{width:"15%",marginLeft:"8px"}} className='btn btn-danger ' to={'/'}>Restart</Link>
        </div>
      </div>
    </div>
  );
}

export default C12;
