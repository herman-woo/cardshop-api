CREATE TABLE users (id SERIAL PRIMARY KEY, first VARCHAR(20), last VARCHAR(25), password VARCHAR);
INSERT INTO users (first,last,password) VALUES ('Udacity','User','$2b$10$WltCDZpoLzijod/jmXnlSOwSzg8uvP4FB86oegDzwZhy2disIoTNq'),('Udacity','Twoser','$2b$10$rgSYX6RuHqNnsSjmNmf2fu0oGKlwe1z7qz32TkHQT3V6sufOr84qG')