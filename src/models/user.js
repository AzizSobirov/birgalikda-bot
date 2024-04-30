import { Model, DataTypes } from "sequelize";

export class Users extends Model {}
export async function USERS_MODEL({ sequelize }) {
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      location: DataTypes.STRING,
      where: DataTypes.STRING,
      passengers: DataTypes.STRING,
    },
    {
      tableName: "users",
      modelName: "Users",
      updatedAt: "updated_at",
      createdAt: "created_at",
      deletedAt: "deleted_at",
      underscored: true,
      sequelize,
    }
  );
}
