import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// export async function getCatalogList() {
//   const response = await axios.get(BASE_URL);

//   return response.data.items;
// }

export async function getCatalogList(
  currentPage = 1,
  limit = 23,
  location = " "
) {
  const response = await axios.get(BASE_URL, {
    params: {
      location: location,
      page: currentPage,
      limit: limit,
    },
  });

  return response.data.items;
}

export async function getCamperbyId(id) {
  const response = await axios.get(
    `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
  );

  return response.data;
}
