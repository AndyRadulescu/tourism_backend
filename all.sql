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

INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('5c40b448-ea38-414b-901d-bb788cbfe7d1', 'Kronwell', 4, 'Romania', 'Brasov', 'Bulevardul Gării 7A', 'In the heart of the town', '87414687617', 'kreonwell.idk.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1546957104/tourism_app/kronwell.jpg');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('16f10979-15bb-40a2-8a84-a0d71afa2fc8', 'Ambient', 4, 'Romania', 'Brasov', 'Strada Iuliu Maniu 27', 'best in town', '07354866687', 'ambient@gmail.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1546957104/tourism_app/ambient.jpg ');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('4a04f0ad-2669-4f1b-9ca7-d60d7f210dd8', 'Aurelius', 5, 'Romania', 'Brasov', 'Strada Poiana lui Neagoe', 'Situat intr-un peisaj maiestuos, pe marginea lacului Miorita, Hotel Aurelius este o oaza de liniste si relaxare. Rezerva cazare Poiana Brasov!', '944494635867', 'aurelius@aurelius.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1547060043/tourism_app/11641467.jpg');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('fcb40195-ddbe-43a3-9732-69bb981cbd4d', 'Pirates', 5, 'United Kingdom', 'London', 'Churchill Street 79', 'Full of history', '7885764746687', 'churchill@gmail.co.uk', 'https://res.cloudinary.com/dckxao78i/image/upload/v1546957104/tourism_app/Churchill.jpg');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('edda6b0f-d876-42f4-845b-db2b4aa2b0a6', 'Alpin', 4, 'Romania', 'Brasov', 'Poiana Brasov 500001', 'Laid-back rooms in a bright mountain hotel featuring a pool, a spa & a French/Mediterranean eatery.', '6832476436324', 'alpin@gmail.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1549310971/tourism_app/alpin.jpg');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('78737b1a-9ab9-4717-88d0-ff368b244cbb', 'Elizeu', 3, 'Romania', 'Bucuresti', 'Strada Elizeu 11-13', 'Standard rooms in a modern lodging with a restaurant & a lobby bar, plus free breakfast.
', '68475120942', 'elizeu@elizeu.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1549311199/tourism_app/elizeu.jpg');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('7ebeee8f-02d6-465e-858b-f6af7f41375a', 'Yesterday', 4, 'Romania', 'Bucuresti', 'Strada Economu Cezărescu 8', 'Warmly decorated quarters with balconies in a laid-back hotel featuring a restaurant & live music.
', '512216234122', 'yesterday@yahoo.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1549311333/tourism_app/yesterday.jpg');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('390b092a-21fd-433c-ace3-9f374e022ef4', 'Bohemia', 4, 'Romania', 'Bacau', 'Strada Gheorghe Donici 2', 'Laid-back rooms in a casual hotel offering a restaurant & a bar', '0424412415', 'bohemia@yahoo.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1549311508/tourism_app/bohemia.jpg');
INSERT INTO public.hotel (id, name, stars, country, city, street_address, description, phone, email, image_url) VALUES ('2e664ea9-ed6b-487c-8bef-4123e9601d03', 'President', 4, 'Greece', 'Athene', '43, Kifissias Av, Athina 115 23', '43, Kifissias Av, Athina 115 23', '64125126134', 'President@gmail.com', 'https://res.cloudinary.com/dckxao78i/image/upload/v1549311723/tourism_app/president.jpg');
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('5c40b448-ea38-414b-901d-bb788cbfe7d1', '501', 'Big room, plenty of space, and of course a beautiful view', '2019-03-12 12:10:14.919000', '2019-03-18 12:10:21.121000', '5c40b448-ea38-414b-901d-bb788cbfe7d1', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('c9896721-1ea6-46a8-9605-f56f3164e6cc', '23', 'double room', '2019-02-12 23:53:35.905000', '2019-02-15 23:53:26.018000', '16f10979-15bb-40a2-8a84-a0d71afa2fc8', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('20272505-f02b-4a47-9491-170b684db082', '54', 'single room', '2019-03-16 12:44:34.583000', '2019-03-18 12:44:41.590000', '4a04f0ad-2669-4f1b-9ca7-d60d7f210dd8', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('0a0b0f50-e8b4-41b9-b739-4fb68c93d59d', '546', 'double room', '2019-02-07 20:38:10.900000', '2019-02-12 20:38:35.648000', 'fcb40195-ddbe-43a3-9732-69bb981cbd4d', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('54f67596-c904-4614-ac69-a6bdc92f9d16', '533', 'single room ', '2019-02-11 20:39:05.257000', '2019-02-23 20:39:14.927000', 'fcb40195-ddbe-43a3-9732-69bb981cbd4d', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('582e80a4-02fe-482a-8317-d0ed7a1bfd1b', '52', 'double room', '2019-02-23 20:40:12.497000', '2019-02-25 20:40:18.524000', 'edda6b0f-d876-42f4-845b-db2b4aa2b0a6', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('b4bef2e7-95f2-4579-a2ed-069959758982', '63', 'single room', '2019-02-09 20:49:15.092000', '2019-02-25 20:50:02.293000', '78737b1a-9ab9-4717-88d0-ff368b244cbb', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('e7ac4e15-88b8-402f-9953-46c2362de585', '11', 'single room', '2019-02-10 20:50:38.665000', '2019-02-23 20:50:48.705000', '78737b1a-9ab9-4717-88d0-ff368b244cbb', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('44755d7a-e3bc-4613-b985-0cc34529eeb2', '6544', 'double room', '2019-02-10 20:52:48.096000', '2019-02-11 20:52:36.299000', '7ebeee8f-02d6-465e-858b-f6af7f41375a', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('946969a7-b150-469b-a22f-6d609c5998be', '2553', 'double room', '2019-02-23 20:56:11.901000', '2019-02-28 20:56:20.421000', '7ebeee8f-02d6-465e-858b-f6af7f41375a', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('0d4658d9-e3f3-4b68-a460-61cf01add982', '1', 'double room', '2019-02-10 20:57:02.334000', '2019-02-08 20:57:10.217000', '390b092a-21fd-433c-ace3-9f374e022ef4', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('590d0925-9975-4410-8277-ed57bcfa881e', '42', 'single room', '2019-02-11 20:58:04.662000', '2019-02-16 20:58:13.213000', '2e664ea9-ed6b-487c-8bef-4123e9601d03', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('5bef29ab-1419-40fa-bcc3-cf00dd556007', '24', 'double room', '2019-02-09 20:58:44.543000', '2019-02-23 20:58:55.941000', '2e664ea9-ed6b-487c-8bef-4123e9601d03', null);
INSERT INTO public.room (id, number, description, start_date, end_date, hotel_id, user_id) VALUES ('def6f17e-d4fa-4c39-9832-aa70b5eab726', '601', 'single room', '2019-02-12 22:40:52.070000', '2019-02-18 22:40:56.050000', '5c40b448-ea38-414b-901d-bb788cbfe7d1', 32);
INSERT INTO public."user" (id, name, email, phone, username, password) VALUES (32, 'cornel', 'cornel@gmail.com', '12532215623', 'cornel', '$2b$10$toWLcwncrOSFaa4CRGods.84lXmFF8kHeWBd3BjY88YpBEGsGjWwO');