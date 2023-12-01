//"Posts" is the name of the table
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      onDelete: "cascade",
    }); /*更新過後，Comments table 應該出現一欄位叫“PostId”, 若沒看到則drop掉原本的Comments table, 再refresh again*/
    /*onDelete: "cascade" means that if the post is deleted, 
    the comments in the post are deleted*/
  };

  return Posts;
};
