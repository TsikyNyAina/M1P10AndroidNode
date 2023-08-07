CREATE TABLE `event`(
    id int primary key auto_increment,
    description varchar(255),
    createdAt datetime default now(),
    deletedAt datetime default null,
    userId int,
    foreign key(userId) references user(id)
);

CREATE TABLE `media`(
    id int primary key auto_increment,
    eventId int,
    type JSON,
    foreign key(eventId) references event(id)
);