const getBase = () => {
  const host = window.location.hostname.toLowerCase();

  // Main frontend domains should always use the backend URL
  if (
    host === "localhost" ||
    host.endsWith(".vercel.app") ||
    host.endsWith(".infinityfreeapp.com")
  ) {
    return (
      (process.env.REACT_APP_API_PROTOCOL || "https://") +
      (process.env.REACT_APP_API_DEFAULT_BASE ||
        "mvpbackend.infinityfreeapp.com") +
      (process.env.REACT_APP_API_PATH || "")
    );
  }

  // Tenant subdomains (only lvh.me in your current setup)
  if (host.endsWith(".lvh.me")) {
    return (
      (process.env.REACT_APP_API_PROTOCOL || "https://") +
      host +
      (process.env.REACT_APP_API_PATH || "")
    );
  }

  // Fallback
  return (
    (process.env.REACT_APP_API_PROTOCOL || "https://") +
    (process.env.REACT_APP_API_DEFAULT_BASE ||
      "mvpbackend.infinityfreeapp.com") +
    (process.env.REACT_APP_API_PATH || "")
  );
};
// Export the dynamically generated base URL
export const API_BASE = getBase();

// Your exact endpoint dictionary remains beautifully untouched!
export const ENDPOINTS = {
  LOGIN: "/login",
  LOGOUT: "/logout",
  REGISTER: "/register",
  REFRESH_TOKEN: "/refresh-token",
  CHANGE_PASSWORD: "/change-password",

  // Patients
  PATIENTS: "/patients",
  PATIENT_BY_ID: (id) => `/patients/${id}`,

  // Appointments
  APPOINTMENTS: "/appointments",
  APPOINTMENT_BY_ID: (id) => `/appointments/${id}`,

  // Calendar
  CALENDAR: "/calendar",

  // Dashboard
  DASHBOARD_SUMMARY: "/dashboard/summary",
  DASHBOARD_APPOINTMENTS: "/dashboard/appointments",
  DASHBOARD_PRESCRIPTIONS: "/dashboard/prescriptions",

  // Billing
  BILLING: "/billing",
  BILLING_BY_ID: (id) => `/billing/${id}`,

  // Communication
  MESSAGES: "/messages",
  MESSAGES_BY_APPOINTMENT: (appointmentId) => `/messages/${appointmentId}`,
  MESSAGE_BY_ID: (id) => `/messages/${id}`,

  // Prescriptions
  PRESCRIPTIONS: "/prescriptions",
  PRESCRIPTION_BY_ID: (id) => `/prescriptions/${id}`,
  PRESCRIPTION_STATUS: (id) => `/prescriptions/${id}/status`,
  PATIENT_PRESCRIPTIONS: (patientId) => `/patients/${patientId}/prescriptions`,
  APPOINTMENT_PRESCRIPTION: (appointmentId) =>
    `/appointments/${appointmentId}/prescriptions`,

  // Staff
  STAFF: "/staff",
  STAFF_BY_ID: (id) => `/staff/${id}`,

  //Endpoints
  TENANT_CONFIG: (subdomain) => `/tenant/config?tenant=${subdomain}`,

  //Users
  USERS: "/users",
  USER_STATUS: (id) => `/users/${id}/status`,
  DOCTORS_LIST: "/users/doctors",
  PATIENTS_LIST: "/patient/patients",
  User_PATIENTS_LIST: "/users/patients",
};
