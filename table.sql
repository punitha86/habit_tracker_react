create table habits (id SERIAL, title VARCHAR(64), description VARCHAR(200), daysOfWeek VARCHAR(32), timing VARCHAR(60),completed BOOLEAN, comments VARCHAR(100));


insert into habits (title, description, daysOfWeek,timing,completed,comments)VALUES ('test Habit','test Habit','Monday,Tuesday','7.00AM',true,'Done it');

insert into habits (title, description, daysOfWeek,timing,completed,comments)VALUES ('test Habit num2','new test','Sunday,Tuesday','9.00AM',true,'Done it');
