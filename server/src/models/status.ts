import { DataTypes, Sequelize, Model, 
    type InferAttributes,
    Optional } from 'sequelize';

// Define the attributes for the User model
interface StatusAttributes {
    id: number;
    title: string;
}

// Define the optional attributes for creating a new User
interface StatusCreationAttributes extends Optional<StatusAttributes, 'id'> { }

// Define the User class extending Sequelize's Model
export class Status extends Model<InferAttributes<Status>, StatusCreationAttributes> implements StatusAttributes {
    public id!: number;
    public title!: string;
 }

// Define the UserFactory function to initialize the User model
export function StatusFactory(sequelize: Sequelize): typeof Status {
    Status.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'status',  // Name of the table in PostgreSQL
            sequelize,            // The Sequelize instance that connects to PostgreSQL
            timestamps: false,
            }
    );

    return Status;  // Return the initialized Task model
}