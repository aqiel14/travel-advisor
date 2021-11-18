import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    //req
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            'a4afd84176msh116084e72b421d6p1c4e82jsn2d53b94d42f5',
        },
      }
    );

    return data;
  } catch (e) {
    console.log(e);
  }
};
