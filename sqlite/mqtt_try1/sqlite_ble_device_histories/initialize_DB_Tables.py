#------------------------------------------
#--- Author: Pradeep Singh
#--- Date: 20th January 2017
#--- Version: 1.0
#--- Python Ver: 2.7
#--- Details At: https://iotbytes.wordpress.com/store-mqtt-data-from-sensors-into-sql-database/
#------------------------------------------

import sqlite3

# SQLite DB Name
DB_Name =  "IoT.db"

#DB_Name =  "gyroValues.db"
# SQLite DB Table Schema
TableSchema="""

drop table if exists gyro ;
create table gyro (
  id integer primary key autoincrement,
  X text,
  Y text,
  Z text
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
