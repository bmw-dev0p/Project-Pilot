import { DataTypes, Sequelize, Model, 
    type InferAttributes,
    Optional, type ForeignKey } from 'sequelize';
import type { User } from './user.js';
import type { Status } from './status.js';

// Define the attributes for the User model
interface TaskAttributes {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    status_id: number;
    user_id: number;
}

// Define the optional attributes for creating a new User
interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> { }

// Define the User class extending Sequelize's Model
export class Task extends Model<InferAttributes<Task>, TaskCreationAttributes> implements TaskAttributes {
    public id!: number;
    public title!: string;
    public description!: string;
    public dueDate!: string;
    public status_id!: ForeignKey<Status['id']>;
    public user_id!: ForeignKey<User['id']>;
}

// Define the UserFactory function to initialize the User model
export function TaskFactory(sequelize: Sequelize): typeof Task {
    Task.init(
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
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            dueDate: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            status_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            }
        },
        {
            tableName: 'tasks',  // Name of the table in PostgreSQL
            sequelize,            // The Sequelize instance that connects to PostgreSQL
            timestamps: true,
            underscored: true
            }
    );

    return Task;  // Return the initialized Task model
}