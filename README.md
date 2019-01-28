# tourism_backend

This is the backend for the tourist frontend application. This is a Node.js application that makes use of Express.js for routing the REST 
calls, Sequelize for the ORM (object realational mapping).

To create the database, download docker and run the following comands. These will install a postgres image and will create a container.
The next comands will create the database and grand all privileges. **Do not run the last comand!** This will delete the database.

```sh
docker run --name postgresdb -p 32768:5432 -d postgres
docker container update --restart=always postgresdb
docker exec -it postgresdb psql --username postgres -c "CREATE DATABASE devdb OWNER postgres;"
docker exec -it postgresdb psql --username postgres -c "GRANT ALL PRIVILEGES ON DATABASE devdb TO postgres;"
docker exec -it postgresdb psql --username postgres -c "DROP DATABASE devdb"
```

When a user reagisters, the password is hashed and stored in the database.
After logging in, a **JWT** is returned and stored in the browser's local storge. This will authentificate the user.
