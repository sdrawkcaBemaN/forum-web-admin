export async function getAdmin(id) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/admin/${id}`, {
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

export async function getAdmins({ page = 1, size = 10 }) {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/admin?page=${page}&size=${size}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const result = await response.json();
    console.log(result);
    if (response.ok) {
      return {
        error: null,
        total: result.total,
        data: result.data,
      };
    } else {
      return {
        error: result.error,
        total: 0,
        data: null,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}

export async function createAdmin(data) {
  try {
    const response = await fetch("http://127.0.0.1:5000/admin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
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

export async function resetPassword(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/admin/${id}/reset-password`,
      {
        method: "PATCH",
        credentials: "include",
      }
    );

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

export async function update(id, dto) {
  try {
    const res = await fetch(`http://127.0.0.1:5000/admin/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
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

export async function deleteAdmin(id) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/admin/${id}`, {
      method: "DELETE",
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
