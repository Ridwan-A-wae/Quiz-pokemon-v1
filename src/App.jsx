import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';


function App() {

  const [poke, setPoke] = useState()
  const [load, setLoad] = useState(false)
  const [err, setError] = useState()
  const [number, setNumber] = useState(1)


  useEffect(() => {

    let abortcontroller = new AbortController();

    const loadPoke = async () => {
      try {
        setLoad(true)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/25`, {
          signal: abortcontroller.signal
        })
        setPoke(response.data)
      } catch (err) {
        setError('Something went wrong.')
      } finally {
        setLoad(false)

      }
    }
    loadPoke();
    return () => abortcontroller.abort();
  }, [number])






  return <div className="block max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
      {load ? <ReactLoading type='spin'color='black' width={'20%'} height={'20%'} /> : <div>
        
      
        <div>
          <h1>Quiz Pokemon!! <span className="text-muted" style={{fontSize:"18px",fontWeight:"600"}}>BETA V.1</span> </h1>
          <hr />
          <br />
          <p style={{color:"black",fontSize:"24px"}}>วิธีการเล่น</p>
          <h2 style={{fontSize:"30px"}}>ทายชื่อ Pokemon จากรูปภาพ  </h2>
          <br />
          <ul>
            <li style={{display:"flex"}}>
              <p>- ตอบถูก Alert</p>
              <p style={{color:"green",fontSize:"18px"}} >: "สีเขียว"</p>
            </li>
            <li style={{display:"flex"}}>
              <p>- ตอบผิด ปุ่มจะเปลี่ยนสีเป็น</p>
              <p >: <span style={{color:"red",fontSize:"18px"}} > "สีแดง"</span></p>
            </li>
            <li style={{display:"flex"}}>
              <p style={{fontWeight:"600"}} className='text-warning'>สามารถเลือกทุกข้อเพื่อหาคำตอบ*</p>
            </li>
          </ul>
          <br />
          <div>
              <Link style={{width:"100%"}} className='btn btn-primary ' to={'/c1'}> Start </Link> 
      </div>
          <img style={{width:"400px"}} src={poke?.sprites?.other?.home?.front_default} alt={poke?.species.name} />
            <div style={{marginTop:"8px"}}>
              <h2 style={{color:'red',fontSize:"20px"}}>แจ้งเตือน ยังไม่ได้ทำระบบรวมคะแนน</h2>
            <h1 style={{fontSize:"14px",alignItems:'end'}} className="text-muted">created by ridwan</h1>            
            </div>
        </div>
      </div>}
    </div>
  </div>
}
export default App;
