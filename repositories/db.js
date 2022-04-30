import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://okzafatt:B9vjdOvGblr-PLCevAFb-CWIDyk2M5rG@kesavan.db.elephantsql.com/okzafatt",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
