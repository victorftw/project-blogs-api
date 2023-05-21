const validateContent = (req, res, next) => {
  const { title, content } = req.body;

  if (title.length === 0 || content.length === 0) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = validateContent;
