let obj = {
  name: "Paddy",
  address: {
    town: "Lerum",
    country: "Sweden"
  }
}

let copyObj = JSON.parse(JSON.stringify(obj));


console.log(copyObj);