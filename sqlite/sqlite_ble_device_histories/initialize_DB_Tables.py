#------------------------------------------
#--- Author: Pradeep Singh
#--- Date: 20th January 2017
#--- Version: 1.0
#--- Python Ver: 2.7
#--- Details At: https://iotbytes.wordpress.com/store-mqtt-data-from-sensors-into-sql-database/
#------------------------------------------

import sqlite3

# SQLite DB Name
DB_Name =  "blehis.db"

#DB_Name =  "gyroValues.db"
# SQLite DB Table Schema
drop table if exists gyro ;
TableSchema="""
create table gyro(
  ID integer primary key autoincrement,
  SNo text,
  UUID text,
  SessionNumber text,
  EnterTime text,
  ExitTime text,
  SessionAT text,
  SessionIT text,
  TotalAT text,
  TotalInTime text,
  LastActivityStart text,
  LastActivityStop text
);
"""

#Connect or Create DB File
conn = sqlite3.connect(DB_Name)
curs = conn.cursor()

#Create Tables
sqlite3.complete_statement(TableSchema)
curs.executescript(TableSchema)

#Close DB
curs.close()
conn.close()
