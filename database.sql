-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "products" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(25) NOT NULL,
	"quantity" INTEGER NOT NULL,
	"unit" VARCHAR(15) NOT NULL,
	"isPurchased" BOOLEAN DEFAULT 'false'
);

INSERT INTO "products" ("name", "quantity", "unit")
VALUES ('Apples', '2', 'lbs'), ('Bread', '1', 'loaf'), ('Milk', '3', 'gallon');

SELECT * FROM "products";
