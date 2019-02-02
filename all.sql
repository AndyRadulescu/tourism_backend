create table if not exists "user"
(
	id serial not null
		constraint user_pk
			primary key,
	name varchar(100),
	email varchar(500) not null,
	phone varchar(50),
	username varchar(250) not null,
	password varchar(1000)
);

alter table "user" owner to postgres;

create unique index if not exists user_id_uindex
	on "user" (id);

create unique index if not exists user_email_uindex
	on "user" (email);

create unique index if not exists user_username_uindex
	on "user" (username);

create table if not exists hotel
(
	id uuid not null,
	name varchar(100) not null,
	stars integer not null,
	country varchar(100) not null,
	city varchar(100) not null,
	street_address varchar(300) not null,
	description varchar(1000) not null,
	phone varchar(15) not null,
	email varchar(250),
	image_url varchar(2000)
);

alter table hotel owner to postgres;

create unique index if not exists hotel_id_uindex
	on hotel (id);

create unique index if not exists hotel_street_address_uindex
	on hotel (street_address);

create table if not exists room
(
	id uuid not null,
	number varchar(25) not null
		constraint room_pk
			primary key,
	description varchar(500) not null,
	start_date timestamp,
	end_date timestamp,
	hotel_id uuid
		constraint room_hotel__fk
			references hotel (id)
				on update cascade on delete cascade,
	user_id integer
);

alter table room owner to postgres;

create unique index if not exists room_id_uindex
	on room (id);

create unique index if not exists room_number_uindex
	on room (number);

INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('fcb40195-ddbe-43a3-9732-69bb981cbd4d', 'Pirates', 5, 'United Kingdom', 'London', 'Churchill Street 79', 'full of history', '7885764746687', 'churchill@gmail.co.uk', 'https://res.cloudinary.com/dckxao78i/image/upload/v1546957104/tourism_app/Churchill.jpg');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('5c40b448-ea38-414b-901d-bb788cbfe7d1', 'Kronwell', 4, 'Romania', 'Brasov', 'Bulevardul Gării 7A', 'In the heart of the town', '87414687617', 'kreonwell.idk.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1546957104/tourism_app/kronwell.jpg');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('16f10979-15bb-40a2-8a84-a0d71afa2fc8', 'Ambient', 4, 'Romania', 'Brasov', 'Strada Iuliu Maniu 27', 'best in town', '07354866687', 'ambient@gmail.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1546957104/tourism_app/ambient.jpg ');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('4a04f0ad-2669-4f1b-9ca7-d60d7f210dd8', 'Aurelius', 5, 'Romania', 'Brasov', 'Strada Poiana lui Neagoe', 'Situat intr-un peisaj maiestuos, pe marginea lacului Miorita, Hotel Aurelius este o oaza de liniste si relaxare. Rezerva cazare Poiana Brasov!', '944494635867', 'aurelius@aurelius.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1547060043/tourism_app/11641467.jpg');
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('20272505-f02b-4a47-9491-170b684db082', '54', 'something something something', '2019-01-16 12:44:34.583000', '2019-01-18 12:44:41.590000', '4a04f0ad-2669-4f1b-9ca7-d60d7f210dd8', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('5c40b448-ea38-414b-901d-bb788cbfe7d1', '501', 'Big room, plenty of space, and of course a beautiful view', '2019-03-12 12:10:14.919000', '2019-03-18 12:10:21.121000', '5c40b448-ea38-414b-901d-bb788cbfe7d1', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('c9896721-1ea6-46a8-9605-f56f3164e6cc', '23', 'dflkahgasjfbfdsa', '2019-02-12 23:53:35.905000', '2019-02-15 23:53:26.018000', '16f10979-15bb-40a2-8a84-a0d71afa2fc8', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('def6f17e-d4fa-4c39-9832-aa70b5eab726', '601', 'something about this room', '2019-02-12 22:40:52.070000', '2019-02-18 22:40:56.050000', '5c40b448-ea38-414b-901d-bb788cbfe7d1', null);
INSERT INTO public."user" (id, name, email, phone, username, password) VALUES (21, 'Andy Radulescu', 'radulescu.eduard.andrei@gmail.com', '735747637', 'andy', '$2b$10$PX1th6GlJ/ZjBXdCfgPWCOrKYBCUVyRnHux6JTzAEAmPvXFa1BzTO');
INSERT INTO public."user" (id, name, email, phone, username, password) VALUES (23, 'andy', 'eafsd@fasd.com', '735747637', 'fadsfasd', '$2b$10$qwUFtRgSvg3i1iUy9tx3YuiUb9TqG3lW433pLC5na9HY5VAUihAdG');
INSERT INTO public."user" (id, name, email, phone, username, password) VALUES (25, 'adsfadsf', 'fasdfasd', 'fadsfdas', 'asdfasd', '$2b$10$YFREqhq8j6C0FTZdz2wDB.b67CbwnGU/ph0Ry0Ca9bOD.jl1Eeu/u');
INSERT INTO public."user" (id, name, email, phone, username, password) VALUES (27, 'fasdfasd', 'fadsfsadf', 'dasfasd', 'fasdfasd', '$2b$10$V7jxsCUSiQMgUweq0yHReeExNv1lt6IDasV0CyUlGqUtfpCUw3Gvm');
INSERT INTO public."user" (id, name, email, phone, username, password) VALUES (28, 'dfassdaf', 'fasdfsadf@fasdfsad.com', '735747637', 'sadfdas', '$2b$10$KcCRD/SIAkzLRBJwW3wqJeHbdTRvx5bHRYcFF/UGUMwsz0.5Tgrui');
INSERT INTO public."user" (id, name, email, phone, username, password) VALUES (30, 'andu', 'anduradulescu@gmail.com', '35214612465132', 'aadevaratu', '$2b$10$ydysFVjK0rOdKU90HHU.t.uzoe3pzFZWru2Y5lS0LGuRaL8zCQEdG');
INSERT INTO public."user" (id, name, email, phone, username, password) VALUES (31, 'andu', 'andu@gas.com', '6146516714365451', 'andu', '$2b$10$tyWXhd4y8KWvmMwnvD2OUOz0wqHtFtfm/ezn856rGGkHtJnhHWF.y');