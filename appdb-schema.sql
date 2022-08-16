create database if not exists appdb;

use appdb;

create table if not exists pet (
  name varchar(20),
  owner varchar(20),
  species varchar(20),
  sex char(1)
);