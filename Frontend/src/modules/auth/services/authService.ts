// EC-003 — Gestión de sesión
// Lógica centralizada para manejar la autenticación.
// Tareas: 
// 1. Guardar y recuperar el token del localStorage.
// 2. Definir estados globales de autenticación (isAuthenticated).
// 3. Proveer funciones de login, register y logout.

export const authService = {
    getToken: () => localStorage.getItem('auth_token'),
    setToken: (token: string) => localStorage.setItem('auth_token', token),
    removeToken: () => localStorage.removeItem('auth_token'),
    // TODO: Implementar validación de token y estado global
};
