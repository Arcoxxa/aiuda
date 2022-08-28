class Ejercicios1{
    venta(){
      //console.log("venta..")
      let costo = document.getElementById("costo").value
      costo = parseFloat(costo)
      let des = document.getElementById("descuento").value
      des = parseFloat(des)
      let resp = document.getElementById("resp")
      let iva = document.getElementById("iva").checked
      let valorIva = 0,sub=0,tot=0,valordes=0
      const iva12 = 0.12
      valordes = costo*(des/100)
      sub = costo-valordes
      if (iva==true){
        valorIva=sub*iva12
      }
      tot=sub+valorIva
      
      resp.textContent=`Costo:${costo.toString()}\nDescuento:${valordes.toString()}\nSubtotal:${sub.toString()}\nIva:${valorIva.toString()}\nTotal:${tot.toString()}` 
      console.log(resp.textContent)
      console.log(costo,valordes,valorIva,sub,tot)
    }
}
let ejer = new Ejercicios1()
//ejer.venta()


class EjercicioSumarContar{
  SumarContar(){
    let dsd = document.getElementById("desde").value
    dsd = parseFloat(dsd)
    let hst = document.getElementById("hasta").value
    hst = parseFloat(hst)
    let sm = document.getElementById("sm")
    let cnt = document.getElementById("cnt")
    let cont=0, sum= 0
  
    
  }
}
let ejerc = new EjercicioSumarContar()
ejerc.SumarContar()


class EjerciciosDivisores{
  Divisores(){
    let num = document.getElementById("num").value
    let rep = document.getElementById("rep")
    
  }
}