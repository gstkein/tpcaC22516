

  async function setearPrecioSegunDolar(elemId, precio) {
    let response = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
      if (data[i].casa.nombre == 'Dolar turista') {
        let precioDolar = Number(data[i].casa.venta.replace(',', '.'));
        let precioEnDolar = precio.toFixed(2) * precioDolar;
        let precioEnDolarRedondeado = precioEnDolar.toFixed(2);
        document.getElementById(elemId).innerHTML = precioEnDolarRedondeado;
      }
    }
    console.log(data);
}