import React from 'react'

const listFood={
    
        name:"Position Absolute Acı Pizza",
        price:85,
        rating:4.9,
        comment:200,
        explain:"Frontent Dev olarak hala position: absolote kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde birfırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı oluşan italyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir."

    
}

export default function Card1() {
  return (
    
    <section>
        <div style={{ paddingBottom:"25px"}}>
            <h3>{listFood.name}</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', fontWeight: 'bold', paddingBottom:"25px" }}>
            <div style={{paddingRight:"300px"}}>{listFood.price} tl</div>
            <div style={{paddingRight:"60px"}}>{listFood.rating}</div>
            <div><span>(</span>{listFood.comment}<span>)</span></div>
        </div>
        <div>
            {listFood.explain}
        </div>
    </section>
  )
}
