function calculateDistance(lat, lon){
  const sourceLat = 51.515419;
  const sourceLong = -0.141099;
  const lattitudeDistance = (lat - sourceLat) * Math.PI / 180;
  const longitudeDistance = (lon - sourceLong) * Math.PI / 180;

  const sourceRad = sourceLat * Math.PI / 180;
  const targetRad = lat * Math.PI / 180;

  const arcLength = (Math.pow(Math.sin(lattitudeDistance / 2), 2) + Math.pow(Math.sin(longitudeDistance / 2), 2) * Math.cos(sourceRad) * Math.cos(targetRad));

  const earthRadius = 6371;

  const distance = 2 * earthRadius * Math.asin(Math.sqrt(arcLength));

  return distance;
}

module.exports = calculateDistance;