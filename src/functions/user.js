import axios from "axios";

// ----------------------------------------------------------------
// Update profile picture
// ----------------------------------------------------------------

export const updateprofilePicture = async (url, token) => {

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/updateProfilePicture`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
  
};

// ---------------------------------------------------------------
// Update cover picture
// ---------------------------------------------------------------

export const updateCover = async (url, token) => {
  
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/updateCover`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
  
};

// -------------------------------------------------------------
// Add a friend
// -------------------------------------------------------------

export const addFriend = async (id, token) => {

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/addFriend/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }

};

// -------------------------------------------------------------
// Friend request cancel 
// -------------------------------------------------------------

export const cancelRequest = async (id, token) => {

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/cancelRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }

};

// -------------------------------------------------------------
// Follow a user
// -------------------------------------------------------------

export const follow = async (id, token) => {
  
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/follow/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }

};

// -------------------------------------------------------------
// Unfollow a user
// -------------------------------------------------------------

export const unfollow = async (id, token) => {

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/unfollow/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }

};

// -------------------------------------------------------------
// Accept friend request
// -------------------------------------------------------------

export const acceptRequest = async (id, token) => {

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/acceptRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
  
};

// -------------------------------------------------------------
// Unfriend a user
// -------------------------------------------------------------

export const unfriend = async (id, token) => {

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/unfriend/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }

};

// ----------------------------------------------------------------
// Delete friend request
// ----------------------------------------------------------------

export const deleteRequest = async (id, token) => {

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/deleteRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
  
};

// ----------------------------------------------------------------
// Search a user
// ----------------------------------------------------------------

export const search = async (searchTerm, token) => {

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/search/${searchTerm}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data?.data;
  } catch (error) {
    return error.response.data.message;
  }

};

// ----------------------------------------------------------------
// Get a user with userId
// ----------------------------------------------------------------

export const getUserById = async (id, token) => {

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/getUserById`,
      { id },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }

};

// -------------------------------------------------------------------
// Add to search history
// -------------------------------------------------------------------

export const addToSearchHistory = async (searchUser, token) => {
  
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/addToSearchHistory`,
      { searchUser },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
  
};

// ------------------------------------------------------------------
// Get search history
// ------------------------------------------------------------------

export const getSearchHistory = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getSearchHistory`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data?.data;
  } catch (error) {
    return error.response.data.message;
  }
};

// -----------------------------------------------------------------
// Remove search history
// -----------------------------------------------------------------

export const removeFromSearch = async (searchUser, token) => {

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/removeFromSearch`,
      { searchUser },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data?.data;
  } catch (error) {
    return error.response.data.message;
  }

};

// ------------------------------------------------------------------
// Get friends screen all information API calls
// ------------------------------------------------------------------

export const getFriendsPageInfos = async (token) => {

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getFriendsPageInfos`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: "ok", data: data?.data };
  } catch (error) {
    return error.response.data.message;
  }

};

// ----------------------------------------------------------------
// Create a new chat
// ----------------------------------------------------------------

export const createNewChat = async (senderId,receiverId, token) => {

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/createChat/`,
      { senderId, receiverId },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
  
};

// -------------------------------------------------------------
// Get all chat
// -------------------------------------------------------------

export const GetAllChats = async (id, token) => {

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/chat/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data, 'api res')
    return data;
  } catch (error) {
    return error.response.data.message;
  }

};

// -------------------------------------------------------------
// Add a new message
// -------------------------------------------------------------

export const addNewMessage = async (info, token) => {

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/addmessage`,
        info,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data, 'api res')
    return data;
  } catch (error) {
    return error.response.data.message;
  }

};

// -------------------------------------------------------------
// Get all message
// -------------------------------------------------------------

export const getAllMessage = async (id, token) => {

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/message/${id}`,
        {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data, 'api res')
    return data;
  } catch (error) {
    return error.response.data.message;
  }

};

