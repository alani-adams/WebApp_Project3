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
DROP USER 'p3admin'@'localhost';
CREATE USER 'p3admin'@'localhost' identified by '1qaz!QAZ';
GRANT ALL ON *.* TO 'p3admin'@'localhost';
insert into p3.user (userName,displayName,hash,win,loss) values ('test1','Test User #1','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','0','0');
insert into p3.user (userName,displayName,hash,win,loss) values ('test2','Test User #2','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','0','0');
insert into p3.user (userName,displayName,hash,win,loss) values ('test3','Test User #3','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','0','0');
insert into p3.user (userName,displayName,hash,win,loss) values ('test4','Test User #4','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','0','0');
insert into p3.user (userName,displayName,hash,win,loss) values ('test5','Test User #5','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','4','6');
insert into p3.user (userName,displayName,hash,win,loss) values ('test6','Test User #6','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','5','1');
insert into p3.user (userName,displayName,hash,win,loss) values ('test7','Test User #7','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','6','1');
insert into p3.user (userName,displayName,hash,win,loss) values ('test8','Test User #8','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','8','1');
insert into p3.user (userName,displayName,hash,win,loss) values ('test9','Test User #9','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','9','1');
insert into p3.user (userName,displayName,hash,win,loss) values ('test10','Test User #10','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','10','1');
insert into p3.user (userName,displayName,hash,win,loss) values ('test11','Test User #11','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','10.5','1');
insert into p3.user (userName,displayName,hash,win,loss,facebookID) values ('glb14e','George Bush','$2y$10$nosBhRA2Cl41OZh/lTzEU.jnjd.ZLfJHaNbaZ9p8Wr5Vt2vE0NaDu','0','0','1262895470432315');
