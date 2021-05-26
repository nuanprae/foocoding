-- HR database
create database HR;
use HR;
create table locations (location_id int auto_increment, city varchar(255), country varchar(255), address varchar(255), primary key (location_id));
create table employees (employee_id int auto_increment, first_name varchar(255), last_name varchar(255), date_of_birth date, job_title varchar(255), department_id int, location_id int, primary key (employee_id), foreign key (location_id) references locations(location_id));
INSERT INTO locations (city, country, address) values ('Aarhus', 'Denmark', 'Aabogade 15'), ('Berlin', 'Germany', 'Tucholskystraße 2'), ('Copenhagen', 'Denmark', 'Skt. Petri Passage 5'), ('Dublin', 'Ireland', 'Gordon House Barrow St'), ('Hamburg', 'Germany', 'ABC-Strasse 19'), ('Lisbon', 'Portugal', 'Avenida da Liberdade, 110'), ('London', 'United Kingdom', '6 Pancras Square'), ('Madrid', 'Spain', 'Plaza Pablo Ruiz Picasso, I'), ('Moscow', 'Russia', '7 Balchug St'), ('Stockholm', 'Sweden', 'Kungsbron 2');
INSERT INTO employees (first_name, last_name, date_of_birth, job_title, department_id, location_id) values ('Alden', 'Cantrell', '1985-02-28', 'software developer', 3, 4), ('Kierra', 'Gentry', '1990-11-28', 'software developer', 3, 9), ('Pierre', 'Cox', '1976-03-11', 'software developer', 3, 10), ('Thomas', 'Crane', '2000-01-01', 'software developer', 3, 3), ('Mirandta', 'Shaffer', '1976-12-30', 'software developer', 3, 5), ('Bradyn', 'Kramer', '1988-06-03', 'software developer', 3, 8), ('Alvaro', 'McGee', '1974-04-20', 'software developer', 3, 8), ('Lizeth', 'Daniels', '1992-07-25', 'software developer', 3, 1), ('Rashad', 'Dennis', '1994-12-05', 'software developer', 3, 2), ('Akira', 'Kimura', '1998-09-09', 'software developer', 3, 10), ('Leia', 'Ho', '1981-08-11', 'software developer', 3, 3), ('Marcus', 'Haas', '1994-02-02', 'software developer', 3, 4);

-- new_world database
-- 1. What are the names of countries with population greater than 8 million?
select country.name from country where population > 800000;

-- 2. What are the names of countries that have “land” in their names ?
select country.name from country where country.name like '%land%';

-- 3. What are the names of the cities with population in between 500,000 and 1 million ?
select city.name, city.population from city where population between 500000 and 1000000;

-- 4. What's the name of all the countries on the continent ‘Europe’ ?
select country.name from country where continent = 'europe';

-- 5. List all the countries in the descending order of their surface areas.
select country.name from country order by surfacearea desc;

-- 6. What are the names of all the cities in the Netherlands?
select city.name, country.name from city inner join country on city.countrycode = country.code where country.name = 'Netherlands';

-- 7. What is the population of Rotterdam ?
select city.name, city.population from city where city.name = "Rotterdam";

-- 8. What's the top 10 countries by Surface Area ?
select country.name, country.surfacearea from country order by country.surfacearea desc limit 10;

-- 9. What's the top 10 most populated cities?
select city.name, city.population from city order by city.population desc limit 10;

-- 10. What is the population of the world ?
select sum(country.population) as world_population from country;

-- bonus. What are the names of the countries and number of cities in each country, where the sum of the population in the cities listed is larger than 10 000 000?
select country.name as country_name, count(city.id) as number_of_cities, sum(city.population) as total_population from country join city on country.code = city.countrycode group by country.name having sum(city.population) > 10000000;
