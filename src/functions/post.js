import axios from "axios";

// ----------------------------------------------------------------
// Create a new post
// ----------------------------------------------------------------

export const createPost = async (
  type,
  background,
  text,
  images,
  user,
  token
) => {

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/createPost`,
      {
        type,
        background,
        text,
        images,
        user,
      },
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

// ---------------------------------------------------------------
// React a post
// ---------------------------------------------------------------

export const reactPost = async (postId, react, token) => {

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/reactPost`,
      {
        postId,
        react,
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

// ----------------------------------------------------------------
// Get post reacts
// ----------------------------------------------------------------

export const getReacts = async (postId, token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getReacts/${postId}`,

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

// ---------------------------------------------------------------
// Create a new comment
// ---------------------------------------------------------------

export const comment = async (postId, comment, image, token) => {
  
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/comment`,
      {
        postId,
        comment,
        image,
      },

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

// --------------------------------------------------------------
// Save and unsave a post
// --------------------------------------------------------------

export const savePost = async (postId, token) => {
  
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/savePost/${postId}`,
      {},

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

// -------------------------------------------------------------
// Delete a post
// -------------------------------------------------------------

export const deletePost = async (postId, token) => {

  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/deletePost/${postId}`,

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
