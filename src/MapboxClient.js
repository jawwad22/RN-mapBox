import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';

import config from './utils/config';

const clientOptions = { accessToken: `sk.eyJ1IjoidGVzdG1hcGJveDIyIiwiYSI6ImNrYmtjaXY5MTB4aW4ycmxzZWp2cG0wa2YifQ.vZizWDkI67FBUFQSHCinmA`};
const directionsClient = MapboxDirectionsFactory(clientOptions);

export {directionsClient};
