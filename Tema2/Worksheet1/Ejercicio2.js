let fechaHoy = new Date();

let fecha85 = new Date();
fecha85.setDate(fechaHoy.getDate()+85);
console.log(fecha85.getDate()+"/"+(fecha85.getMonth()+1)+"/"+fecha85.getFullYear());

let fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate()-185);
console.log(fecha187.getDate()+"/"+(fecha187.getMonth()+1)+"/"+fecha187.getFullYear());

fecha85.setDate(fecha85.getDate()+720);
console.log(fecha85.getDate()+"/"+(fecha85.getMonth()+1)+"/"+fecha85.getFullYear());

fecha187.setDate(fecha187.getDate()-1);
console.log(fecha85.getDate()+"/"+(fecha85.getMonth()+1)+"/"+fecha85.getFullYear());

let fechaResto = new Date();

fechaResto.setDate(fecha85.getDate()-fecha187.getDate());
console.log(fechaResto.getDate()+"/"+(fechaResto.getMonth()+1)+"/"+fechaResto.getFullYear());



