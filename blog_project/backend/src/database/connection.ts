
import { Connection, createConnection, getConnection } from "typeorm";
import ormConfig from "../../ormconfig";

export const getUsedConnection = async () => {
  let connection: Connection;

  try {
    connection = getConnection("sqlite_post");
    
    if (connection.isConnected) {
      return connection;
    }
  } catch(error) {
    return await createConnection(ormConfig);
  }

    connection = await createConnection(ormConfig);
    return connection;
}