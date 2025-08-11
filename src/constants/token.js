const JWT_SECRET_KEY = import.meta.env.JWT_SECRET_KEY;
const TOKEN_KEY = import.meta.env.TOKEN_KEY;

import jwtDecode from "jwt-decode";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function decodeToken() {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function verifyToken() {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    if (decoded.exp && decoded.exp * 1000 > Date.now()) {
      return decoded;
    }
    return null;
  } catch {
    return null;
  }
}
