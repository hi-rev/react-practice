-- create table

CREATE TABLE IF NOT EXISTS `email` (
  `no` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`no`))
ENGINE = InnoDB;

-- insert email
insert into email values(null, '김', '하나', 'one@gmail.com');
insert into email values(null, '이', '두나', 'two@gmail.com');
insert into email values(null, '최', '세나', 'three@gmail.com');