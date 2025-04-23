import React, { useState, useEffect, useRef } from 'react';
import styles from "./Skills.module.css"

function CodeTesting() {
    const [myArr, setMyArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
  return (
    <section>
       
        <div className={styles.logos}>
            <div className={styles.logosSlide} id='logos-slide'>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
                <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HL08fKj91NpIaYR41EttESOQJg_dxG9oXy8UnmP08tbDE9hdiCzPDncuTL3_A9__XOM&usqp=CAU'/>
            </div>
        </div>
            
           
     
       
       
    </section>
  );
}

export default CodeTesting;




