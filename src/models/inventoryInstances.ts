import { Sequelize, DataTypes, Model } from "sequelize"; 

export class InventoryInstances extends Model {
  public static async initialize(sequelize: Sequelize) {
    
    const attributes = {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: true
      }
    };

    let model = await this.init(attributes, {
      sequelize,
      modelName: 'inventory_instances',
      freezeTableName: true
    });

    await model.sync();

    return model;
  }
};