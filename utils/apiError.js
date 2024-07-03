const DEFAULT_ERRORS = {
  BAD_TOKEN: {
    code: "BAD_TOKEN",
    message: "Token is not valid",
    statusCode: 401,
  },
  TOKEN_EXPIRED: {
    code: "TOKEN_EXPIRED",
    message: "Token expired",
    statusCode: 401,
  },
  UNAUTHORIZED: {
    code: "UNAUTHORIZED",
    message: "Invalid credentials",
    statusCode: 401,
  },
  SERVER_ERROR: {
    code: "SERVER_ERROR",
    message: "Internal server error",
    statusCode: 500,
  },
  NOT_FOUND: {
    code: "NOT_FOUND",
    message: "Not found",
    statusCode: 404,
  },
  BAD_REQUEST: {
    code: "BAD_REQUEST",
    message: "Bad request",
    statusCode: 400,
  },
  FORBIDDEN: {
    code: "FORBIDDEN",
    message: "Permission denied",
    statusCode: 403,
  },
  VALIDATION: {
    code: "VALIDATION",
    message: "Validation error",
    statusCode: 400,
  },
  NO_ROUTE: {
    code: "NO_ROUTE",
    message: "API Route not found",
    statusCode: 404,
  },
  NO_CONTENT: {
    code: "NO_CONTENT",
    message: "No content",
    statusCode: 204,
  },
  BAD_GATEWAY: {
    code: "BAD_GATEWAY",
    message: "Bad gateway",
    statusCode: 502,
  },
  SERVICE_UNAVAILABLE: {
    code: "SERVICE_UNAVAILABLE",
    message: "Service unavailable",
    statusCode: 503,
  },
  CONFLICT: {
    code: "CONFLICT",
    message: "Conflict",
    statusCode: 409,
  },
  TOO_MANY_REQUESTS: {
    code: "TOO_MANY_REQUESTS",
    message: "Too many requests",
    statusCode: 429,
  },
  INTERNAL_SERVER_ERROR: {
    code: "INTERNAL_SERVER_ERROR",
    message: "Internal server error",
    statusCode: 500,
  },
};

const apiError = (errorCode, message) => {
  const defaultError =
    DEFAULT_ERRORS[errorCode] || DEFAULT_ERRORS.INTERNAL_SERVER_ERROR;
  const errorMessage = message || defaultError.message;
  return {
    code: defaultError.code,
    message: errorMessage,
    status: defaultError.statusCode,
  };
};

module.exports = apiError;
