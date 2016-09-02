/**
* @file registry.js
* @author Zishan Iqbal
* @description This file includes a registry model used by sequalize for ORM;
*/

import Sequelize from 'sequelize';
import sequelize from './../utils/sequelize';

const Registry = sequelize.define('registry', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, field: 'ID'},
  url: {type: Sequelize.TEXT, field: 'url'},
  isPublic: {type: Sequelize.BOOLEAN, field: 'is_public'},
  secure: {type: Sequelize.INTEGER, field: 'secure'},
  certificate: {type: Sequelize.TEXT, field: 'certificate'},
  requiresCert: {type: Sequelize.TEXT, field: 'requires_cert'},
  userName: {type: Sequelize.TEXT, field: 'user_name'},
  password: {type: Sequelize.TEXT, field: 'password'},
  userEmail: {type: Sequelize.BIGINT, field: 'user_email'},
  }, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  // disable the modification of table names
  freezeTableName: true,
  // don't use camelcase for automatically added attributes but underscore style
  // so updatedAt will be updated_at
  underscored: true
});

export default Registry;