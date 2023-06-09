const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: 'posts_categories',
      timestamps: false,
      underscored: true,
    }
  );

  PostCategoryTable.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'post_id',
      otherKey: 'category_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: PostCategoryTable,
      foreignKey: 'category_id',
      otherKey: 'post_id',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;
