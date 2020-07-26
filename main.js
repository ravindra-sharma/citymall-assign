const data = require("./data");
const calculateDistance = require("./calculateDistance");

const nearByOffices = [];

for(const company of data){
  const offices = company.offices;
  for(const office of offices){
    const [lat, long] = office.coordinates.split(",").map(item => parseInt(item));
    const distance = calculateDistance(lat, long);
    if(distance<=100){
      nearByOffices.push({
        name: company.organization,
        address: office.address,
        distance
      });
    }
  }
}
nearByOffices.sort(( a, b ) => {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
});

for(let office of nearByOffices){
  console.log(`Name: ${office.name} \nDistance: ${office.distance.toFixed(2)} KM\nAddress: ${office.address}\n------------------------------\n`)
}
