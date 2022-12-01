-- If we run the import many times we'll drop if exists
DROP DATABASE IF EXISTS goalcatcher; 

CREATE DATABASE goalcatcher; 

-- Ensure we are using the correct database 
\c goalcatcher;


CREATE TABLE IF NOT EXISTS teams    ( tid       INTEGER NOT NULL,
                                        team_name   VARCHAR(35) NOT NULL,
                                        flag        VARCHAR(150),        -- make NOT NULL when this data is gathered
                                        PRIMARY KEY (tid));

CREATE TABLE IF NOT EXISTS matches  ( mid  INTEGER NOT NULL,
                                        home_score  INTEGER NOT NULL,
                                        away_score  INTEGER NOT NULL,
                                        m_date      VARCHAR(50) NOT NULL,               -- make NOT NULL when this date is fixed
                                        PRIMARY KEY (mid));
                    
CREATE TABLE IF NOT EXISTS locations    ( lid  INTEGER NOT NULL,
                                            city        VARCHAR(50) NOT NULL,
                                            country     VARCHAR(50) NOT NULL,
                                            PRIMARY KEY (lid));

CREATE TABLE IF NOT EXISTS tournaments  ( toid  INTEGER NOT NULL,
                                            t_name      VARCHAR(150) NOT NULL,
                                            region      VARCHAR(50) NOT NULL,         -- make NOT NULL when this data is gathered
                                            PRIMARY KEY (toid));

CREATE TABLE IF NOT EXISTS plays    ( mid  INTEGER NOT NULL,
                                        home_id     INTEGER NOT NULL,
                                        away_id     INTEGER NOT NULL,
                                        PRIMARY KEY (mid),
                                        FOREIGN KEY (home_id)
                                        REFERENCES teams, 
                                        FOREIGN KEY (away_id)
                                        REFERENCES teams, 
                                        FOREIGN KEY (mid)
                                        REFERENCES matches);

CREATE TABLE IF NOT EXISTS locates  ( mid  INTEGER NOT NULL,
                                        lid     INTEGER NOT NULL,
                                        neutral BOOLEAN,
                                        PRIMARY KEY (mid),
                                        FOREIGN KEY (lid)
                                        REFERENCES locations,
                                        FOREIGN KEY (mid)
                                        REFERENCES matches);

CREATE TABLE IF NOT EXISTS participates ( mid  INTEGER NOT NULL,
                                            toid        INTEGER NOT NULL,
                                            PRIMARY KEY (mid),
                                            FOREIGN KEY (toid) 
                                            REFERENCES tournaments, 
                                            FOREIGN KEY (mid)
                                            REFERENCES matches);
