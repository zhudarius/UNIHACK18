DROP TABLE Player;
DROP TABLE Class;
DROP TABLE Quests;

CREATE TABLE Player (
PLAYER_ID INT NOT NULL,
USERNAME VARCHAR(20) NOT NULL,
PASSWORD VARCHAR(40) NOT NULL,
NAME VARCHAR(40) NOT NULL,
EXP INT NOT NULL,
LEVEL INT NOT NULL,
WIN INT,
LOSS INT,
BOSS INT,
QUESTS_COMPLETED INT ARRAY[64],
PRIMARY KEY (PLAYER_ID)
);

CREATE TABLE Class (
PLAYER_ID INT NOT NULL,
CLASS_ID INT NOT NULL
);

CREATE TABLE Quests (
QUEST_ID INT NOT NULL,
TOPIC VARCHAR(30) NOT NULL,
SUBTOPIC VARCHAR(30) NOT NULL,
PRIMARY KEY (QUEST_ID)
);

INSERT INTO Player
VALUES (0, 'admin', 'admin', 'admin', 0, 0, 0, 0, 0, '{1,2,3,4,5}');;
