-- 1. What is the capital of country X ? (Accept X from user)
prepare stmt_capital from 'select city.name from city inner join country on country.capital = city.id where country.name = ?';
set @input = 'Thailand';
execute stmt_capital using @input;
deallocate prepare stmt_capital;

-- 2. List all the languages spoken in the region Y (Accept Y from user)
prepare stmt_region_languages from 'select distinct language from countrylanguage inner join country on country.code = countrylanguage.countrycode where country.region = ?';
set @input = 'Middle East';
execute stmt_region_languages using @input;
deallocate prepare stmt_region_languages;

-- 3. Find the number of cities in which language Z is spoken (Accept Z from user)
prepare stmt_number_of_cities_by_language from 'select count(city.name) as number_of_cities from city inner join countrylanguage on city.countrycode = countrylanguage.countrycode where language = ?';
set @input = "Maori";
execute stmt_number_of_cities_by_language using @input;
deallocate prepare stmt_number_cities_language_spoken;

-- 4. List all the continents with the number of languages spoken in each continent
prepare stmt_number_of_languages_by_continent from 'select distinct continent, count(distinct language) as number_of_languages from country inner join countrylanguage on country.code = countrylanguage.countrycode group by continent';
execute stmt_number_of_languages_by_continent;
deallocate prepare stmt_number_of_languages_by_continent;

-- 5.  List countries that is in the same continent, with the same official language, as the country given as input
select distinct name from country inner join countrylanguage on country.code = countrylanguage.countrycode where countrylanguage.language IN (select language from countrylanguage inner join country on countrylanguage.countrycode = country.code where country.name = "Switzerland" and isofficial = "T") and country.continent = (select country.continent from country where country.name = "Switzerland") and isofficial = "T";

use todo;
create table list (list_id int auto_increment primary key, list_name varchar(255));
create table task (task_id int auto_increment primary key, task_description varchar(255), completed boolean, list_id int, foreign key (list_id) references list(list_id));
create table tag (tag_id int auto_increment primary key, tag_name varchar(255), task_id int, foreign key (task_id) references task(task_id));
create table reminder (reminder_id int auto_increment primary key, due_date datetime, task_id int, foreign key (task_id) references task(task_id));


