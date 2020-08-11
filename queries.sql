-- Database Queries

-- Find all customers with postal code 1010
select * 
from Customers
where PostalCode = 1010;

-- Find the phone number for the supplier with the id 11
select * 
from Suppliers
where SupplierID = 11;

-- List first 10 orders placed, sorted descending by the order date
-- these work in the w3schools tool 
--  --> https://stackoverflow.com/a/10534368/14056123
--  --> https://stackoverflow.com/a/39401798/14056123

-- select * 
-- from (
--   select *
--   from Orders
--   order by OrderDate
--   limit 10
-- ) 
-- order by OrderDate desc;

--  select * 
--  from (
-- 	  select OrderDate, * 
--    from Orders 
--    limit 10
--  ) 
--  order by OrderDate desc 
--  limit 10


-- Find all customers that live in London, Madrid, or Brazil
select Country, City, * 
from Customers
where Country = 'Brazil'
or City in ('London', 'Madrid')
order by Country, City;

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
insert into Customers (
  CustomerName,
  ContactName,
  Address,
  City,
  PostalCode,
  Country
)
values (
  'The Shire', 
  'Bilbo Baggins', 
  '1 Hobbit-Hole', 
  'Bag End', 
  '111', 
  'Middle Earth'
);

-- Update Bilbo Baggins record so that the postal code changes to "11122"
-- select PostalCode, * from Customers where CustomerID = '92' --> check data before/after updating it 
update Customers
set PostalCode = '11122'
where CustomerID = "92";

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
