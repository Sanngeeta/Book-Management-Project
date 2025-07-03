module.exports = (req, res, next) => {
  try {

    const apiKey = req.headers["x-api-key"];
    if (apiKey !== "secret123") {
      return res.status(401).json({ status: 401, message: "Unauthorized" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ status: 401, message: "Unauthorized" });
  }
};
