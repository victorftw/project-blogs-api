const { BlogPost, User, Category } = require('../models');

const verifyAuthorization = async (req, res, next) => {
    const { id } = req.params;
    const userId = res.locals.user;
    const post = await BlogPost.findOne({
        where: { id },
        include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category, as: 'categories', attributes: ['id', 'name'] },
        ],
      });

    if (!post) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    if (userId !== post.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }

    next();
};

module.exports = verifyAuthorization;
