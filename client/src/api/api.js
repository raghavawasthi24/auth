export const LoginAPI = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        return {
          success: false,
          error: result.message || "Login failed",
          status: response.status,
        };
      }
  
      // Save JWT token in localStorage for protected routes
      if (result.token) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("info", JSON.stringify(result.user));
      }
  
      return {
        success: true,
        data: result,
        status: response.status,
      };
    } catch (err) {
      return {
        success: false,
        error: err.message || "Network error",
      };
    }
  };
  

export const RegisterAPI = async (data) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.message || "Registration failed",
        status: response.status,
      };
    }

    return {
      success: true,
      data: result,
      status: response.status,
    };
  } catch (err) {
    return {
      success: false,
      error: err.message || "Network error",
    };
  }
};

export const VerifyOtpAPI = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        return {
          success: false,
          error: result.message || "OTP verification failed",
          status: response.status,
        };
      }
  
      return {
        success: true,
        data: result,
        status: response.status,
      };
    } catch (err) {
      return {
        success: false,
        error: err.message || "Network error",
      };
    }
  };
  