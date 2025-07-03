module.exports = (req, res, next) => {
  const { title, author, year } = req.body;
  const currentYear = 2025;

  if (typeof title !== "string" || title.trim() === "") {
    return res
      .status(400)
      .json({ status: 400, message: "Title must be a non-empty string" });
  }
  if (typeof author !== "string" || author.trim() === "") {
    return res
      .status(400)
      .json({ status: 400, message: "Author must be a non-empty string" });
  }
  if (typeof year !== "number" || year < 1900 || year > currentYear) {
    return res
      .status(400)
      .json({
        status: 400,
        message: `Year must be between 1900 and ${currentYear}`,
      });
  }

  next();
};
