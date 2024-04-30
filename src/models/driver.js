import { Model, DataTypes } from "sequelize";

export class Drivers extends Model {}
export async function DRIVERS_MODEL({ sequelize }) {
  Drivers.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      phone_2: DataTypes.STRING,
      guvohnoma_old:DataTypes.STRING,
      guvohnoma_orqa:DataTypes.STRING,
      tex_old:DataTypes.STRING,
      tex_orqa:DataTypes.STRING,
      passport:DataTypes.STRING,
      sugurta:DataTypes.STRING,
      nomida:DataTypes.STRING,
      passport:DataTypes.STRING,
      ishonchnoma:DataTypes.STRING,
    },
    {
      tableName: "drivers",
      modelName: "Drivers",
      updatedAt: "updated_at",
      createdAt: "created_at",
      deletedAt: "deleted_at",
      underscored: true,
      sequelize,
    }
  );
}
