const {handleHTTPError} = require('../utils/handlerError')

const checkRole = (role) => (req, res, next) => {
    try {
      const { user } = req;
      const rolesByUser = user.role;
      const checkValueRole = role.some((r) => rolesByUser.includes(r));
      if (!checkValueRole) {
        handleHTTPError(res, 'Unauthorized user', 403);
        return;
      }
      next();
    } catch (e) {
      handleHTTPError(res, 'Permission error', 403);
    }
  };
  
  module.exports = checkRole;
  

module.exports = checkRole;