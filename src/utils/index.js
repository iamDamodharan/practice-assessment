import axios from "axios";

const baseURL = "https://6419a2f5f398d7d95d451b68.mockapi.io/listJobs";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const header = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const postListJobs = async (options) => {
  try {
    const response = await axios.post(baseURL, options, header());
    return checkStatus(response);
  } catch (error) {
    throw error.response;
  }
};

const getListJobs = async () => {
  try {
    const response = await axios.get(baseURL);
    return checkStatus(response);
  } catch (error) {
    throw error.response;
  }
};

const putListJobs = async (options) => {
  try {
    const response = await axios.put(`${baseURL}/${options.id - 1}`, options, header());
    return checkStatus(response);
  } catch (error) {
    throw error.response;
  }
};

export { postListJobs, getListJobs, putListJobs };
