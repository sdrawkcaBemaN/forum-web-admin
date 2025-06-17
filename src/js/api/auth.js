export async function getAuthenticatedUser() {
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/admin", {
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
      error: error.message,
      data: null,
    };
  }
}

export async function login(data) {
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // allow HTTP Only Set-Cookie to be forwarded from API Server to client and from client to API Server
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const { data } = await response.json();
      return {
        error: null,
        data: data,
      };
    } else {
      const error = await response.json();
      return {
        error: error.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: error.message,
      data: null,
    };
  }
}

export async function logout() {
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/admin/logout", {
      method: "POST",
      credentials: "include",
    });

    if (response.ok) {
      return {
        error: null,
        data: null,
      };
    } else {
      const error = await response.json();
      return {
        error: error.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: error.message,
      data: null,
    };
  }
}

export async function updatePassword(data) {
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/admin/update-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const { data } = await response.json();
      return {
        error: null,
        data: data,
      };
    } else {
      const error = await response.json();
      return {
        error: error.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: error.message,
      data: null,
    };
  }
}

export async function getAll(){
  try {
    const response = await fetch("http://127.0.0.1:5000/admin/", {
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
      error: error.message,
      data: null,
    };
  }
}
