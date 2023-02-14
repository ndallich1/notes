# **_mySQL_**

A marketable skill that is used in a majority of databases in every economic sector, from manufacturing, logistics, and health care to insurance, commerce, and much more. SQL also makes it easy to handle large amounts of data and scale up quickly

## _Relational Databases_

- organize data into tables

- Keys: identify rows of data in a table. By matching keys between two tables, a relationship is formed

## _Execute a File_

Uppercase is convention. Executing a file means to run the code 

```sql
SOURCE filename.sql;
```

## _Show Database_

This will show all databases in mySQL 

```sql
SHOW DATABASES;
```

## _Select Database_

This will display the current database you are in

```sql
SELECT DATABASE();
```

## _Use Database_

```sql
USE inventory_db;
```

## _Create Table_

```sql
CREATE TABLE produce (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100) NOT NULL
);
```

## _Show Table_

```sql
show tables;
```

```sql
describe table; -- table = the name of your table
```

## _Select all items from a table_

"select star from..." = select all items in table

```sql
SELECT * FROM table; -- table = the name of your table
```

## _Delete row from a table_

```sql
DELETE FROM table; -- table = the name of your table
  -> WHERE id = 2;
```

## _Update row in a table_ 

```sql
UPDATE table; -- table = the name of your table
  -> set id = 12 -- the id number you want to change to
  -> WHERE id = 2; -- the id number in your table
```

```sql
UPDATE table;
  -> SET name = 'strawberry' -- example of an item in the name column
  -> Where id = 1; 
```
_You do not need commas after each line if you are only changing one item in the table_
