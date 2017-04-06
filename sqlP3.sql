drop database p3;
create database p3;
use p3;
create table user (
userName char(30) not null,
displayName char(50) not null,
hash char(70) not null,
win float(9,1),
loss int,
facebookID char(30),
PRIMARY KEY(userName)
);
drop user 'www-p3'@'localhost';
CREATE USER 'www-p3'@'localhost' identified by '1qaz!QAZ';
GRANT ALL ON p3.* TO 'www-p3'@'localhost';
insert into p3.user (userName,displayName,hash,win,loss) values ('test1','Test User #1','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','0','0');
insert into p3.user (userName,displayName,hash,win,loss) values ('test2','Test User #2','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','0','0');
insert into p3.user (userName,displayName,hash,win,loss) values ('test3','Test User #3','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','0','0');
insert into p3.user (userName,displayName,hash,win,loss) values ('test4','Test User #4','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','0','0');
