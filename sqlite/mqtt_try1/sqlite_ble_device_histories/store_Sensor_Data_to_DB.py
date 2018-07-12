#------------------------------------------
#--- Author: Pradeep Singh
#--- Date: 20th January 2017
#--- Version: 1.0
#--- Python Ver: 2.7
#--- Details At: https://iotbytes.wordpress.com/store-mqtt-data-from-sensors-into-sql-database/
#------------------------------------------


import json
import sqlite3

# SQLite DB Name
DB_Name =  "IoT.db"

#DB_Name =  "gyroValues.db"

#===============================================================
# Database Manager Class

class DatabaseManager():
	def __init__(self):
		self.conn = sqlite3.connect(DB_Name)
		self.conn.execute('pragma foreign_keys = on')
		self.conn.commit()
		self.cur = self.conn.cursor()

	def add_del_update_db_record(self, sql_query, args=()):
		self.cur.execute(sql_query, args)
		self.conn.commit()
		return

	def __del__(self):
		self.cur.close()
		self.conn.close()

#===============================================================
# Functions to push Sensor Data into Database

# Function to save Gyro values to DB Table
def gyro_Handler(jsonData):
	#Parse Data
	json_Dict = json.loads(jsonData)
	X = json_Dict['X']
	Y = json_Dict['Y']
	Z = json_Dict['Z']

	#Push into DB Table
	dbObj = DatabaseManager()
	dbObj.add_del_update_db_record("insert into gyro (X,Y,Z) values (?,?,?)",[X, Y, Z])
	del dbObj
	print "Inserted Gyro Data into Database."
	print ""

#===============================================================
# Master Function to Select DB Funtion based on MQTT Topic

def sensor_Data_Handler(Topic, jsonData):
	if Topic == "outsinhala123":
		gyro_Handler(jsonData)

#===============================================================
