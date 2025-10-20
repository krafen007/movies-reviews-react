/**
 * @desc Middleware to restrict access based on user role
 * @access Protected (only for authenticated users)
 */
const permissionMiddleware = (req, res, next) => {
    const role = req.user.role; // Get role from authenticated user

    if (role === 'admin') {
        // Admins are allowed to proceed
        next();
    } else {
        // Non-admin users get a 403 Forbidden response
        return res.status(403).json({
            message: 'Access denied. Only admin can do those operations',
        });
    }
};

export default permissionMiddleware;
