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
DB_Name =  "blehis.db"

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
	#json_Dict = json.loads(jsonData)
	#print(type(jsonData))
	json_Dict = (str(jsonData)).split("#")
	print(json_Dict)
	d0 = json_Dict[0].split("\'")[1]
	d1 = json_Dict[1]
	d2 = json_Dict[2]
	d3 = json_Dict[3]
	d4 = json_Dict[4]
	d5 = json_Dict[5]
	d6 = json_Dict[6]
	d7 = json_Dict[7]
	d8 = json_Dict[8]
	d9 = json_Dict[9]
	d10 = json_Dict[10]
	"""d0 = json_Dict[1]
	d1 = json_Dict[2]
	d2 = json_Dict[3]
	d3 = json_Dict[4]
	d4 = json_Dict[5]
	d5 = json_Dict[6]
	d6 = json_Dict[7]
	d7 = json_Dict[8]
	d8 = json_Dict[9]
	d9 = json_Dict[10]"""

	#Push into DB Table
	dbObj = DatabaseManager()
	dbObj.add_del_update_db_record("insert into gyro (SNo,UUID,SessionNumber,EnterTime,ExitTime,SessionAT,SessionIT,TotalAT,TotalInTime,LastActivityStart,LastActivityStop) values (?,?,?,?,?,?,?,?,?,?,?)",[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10])
	#dbObj.add_del_update_db_record("insert into gyro (d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10) values (?,?,?,?,?,?,?,?,?,?,?)",[d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10])
	del dbObj
	print ("Inserted BLEHISTORY Data into Database.")
	print ("")

#===============================================================
# Master Function to Select DB Funtion based on MQTT Topic

def sensor_Data_Handler(Topic, jsonData):
	if Topic == "instaiscool12345":
		gyro_Handler(jsonData)

#===============================================================
