import React from 'react'
import "./card2.css"


export default function Card2() {
  return (
    <div className="selectionArea">
      
      <div className="boyut-secimi">
        <span>Boyut Seç<span className="zorunlu">*</span></span>
          <form>
            <div className="boyutlar">
              <label htmlFor="kucuk">
                <input type="radio" id="kucuk" name="boyut" value="kucuk" required />
                Küçük
              </label>
              <label htmlFor="orta">
                <input type="radio" id="orta" name="boyut" value="orta" />
                Orta
              </label>
              <label htmlFor="buyuk">
                <input type="radio" id="buyuk" name="boyut" value="buyuk" />
                Büyük
              </label>
            </div>

          </form>
      </div>
      <div className="hamur-secimi">
        <div>
            <label htmlFor="hamur-tipi"><span>Hamur Seç<span className="zorunlu">*</span></span></label> 
        </div>

        <form>
          <div>
            <select name="hamur-tipi" id="hamur-tipi">
            <option hidden value="default">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="kalın">Kalın</option>
            </select>
          </div>
        </form>
        
        
      </div>
    </div>
  )
}
