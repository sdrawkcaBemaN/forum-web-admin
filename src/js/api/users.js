export async function getUsers() {
  try {
    const response = await fetch("http://127.0.0.1:5000/user/", {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();
    if (response.ok) {
      return {
        error: null,
        data: result.data,
      };
    } else {
      return {
        error: result.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}

export async function banUser(id) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/user/${id}/banned`, {
      method: "PATCH",
      credentials: "include",
    });

    const result = await response.json();

    if (response.ok) {
      return {
        error: null,
        data: result.data,
      };
    } else {
      return {
        error: result.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}


export async function unbanUser(id) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/user/${id}/unbanned`, {
      method: "PATCH",
      credentials: "include",
    });

    const result = await response.json();

    if (response.ok) {
      return {
        error: null,
        data: result.data,
      };
    } else {
      return {
        error: result.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}