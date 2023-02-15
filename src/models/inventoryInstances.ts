import { Sequelize, DataTypes, Model } from "sequelize"; 

export class InventoryInstances extends Model {
  public static initialize(sequelize: Sequelize) {
    
    const attributes = {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: true
      }
    };

    return this.init(attributes, {
      sequelize,
      modelName: 'inventoryInstances',
      underscored: true,
      freezeTableName: true
    });
  }
};