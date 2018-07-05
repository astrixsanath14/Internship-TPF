/*
    MPU6050 Triple Axis Gyroscope & Accelerometer. Simple Accelerometer Example.
    Read more: http://www.jarzebski.pl/arduino/czujniki-i-sensory/3-osiowy-zyroskop-i-akcelerometr-mpu6050.html
    GIT: https://github.com/jarzebski/Arduino-MPU6050
    Web: http://www.jarzebski.pl
    (c) 2014 by Korneliusz Jarzebski
*/

#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;
int Xread;
int Xrest;
double Gx;
int Yread;
int Yrest;
double Gy;
int Zread;
int Zrest;
double Gz;
int t=0;
int t1=0;
int t2=0;


void setup() 
{
  Serial.begin(115200);

  Serial.println("Initialize MPU6050");

  while(!mpu.begin(MPU6050_SCALE_2000DPS, MPU6050_RANGE_2G))
  {
    Serial.println("Could not find a valid MPU6050 sensor, check wiring!");
    delay(500);
  }

  // If you want, you can set accelerometer offsets
  mpu.setGyroOffsetX(56);
  mpu.setGyroOffsetY(70);
  mpu.setGyroOffsetZ(93);
  
  mpu.setAccelOffsetX(-891);
  mpu.setAccelOffsetY(-780);
  mpu.setAccelOffsetZ(4922);
  
  checkSettings();
  
  Vector rawAccel = mpu.readRawAccel();
  Vector normAccel = mpu.readNormalizeAccel();

    Xrest = rawAccel.XAxis;
    Yrest = rawAccel.YAxis;
    Zrest = rawAccel.ZAxis;
}

void checkSettings()
{
  Serial.println();
  
  Serial.print(" * Sleep Mode:            ");
  Serial.println(mpu.getSleepEnabled() ? "Enabled" : "Disabled");
  
  Serial.print(" * Clock Source:          ");
  switch(mpu.getClockSource())
  {
    case MPU6050_CLOCK_KEEP_RESET:     Serial.println("Stops the clock and keeps the timing generator in reset"); break;
    case MPU6050_CLOCK_EXTERNAL_19MHZ: Serial.println("PLL with external 19.2MHz reference"); break;
    case MPU6050_CLOCK_EXTERNAL_32KHZ: Serial.println("PLL with external 32.768kHz reference"); break;
    case MPU6050_CLOCK_PLL_ZGYRO:      Serial.println("PLL with Z axis gyroscope reference"); break;
    case MPU6050_CLOCK_PLL_YGYRO:      Serial.println("PLL with Y axis gyroscope reference"); break;
    case MPU6050_CLOCK_PLL_XGYRO:      Serial.println("PLL with X axis gyroscope reference"); break;
    case MPU6050_CLOCK_INTERNAL_8MHZ:  Serial.println("Internal 8MHz oscillator"); break;
  }
  
  Serial.print(" * Accelerometer:         ");
  switch(mpu.getRange())
  {
    case MPU6050_RANGE_16G:            Serial.println("+/- 16 g"); break;
    case MPU6050_RANGE_8G:             Serial.println("+/- 8 g"); break;
    case MPU6050_RANGE_4G:             Serial.println("+/- 4 g"); break;
    case MPU6050_RANGE_2G:             Serial.println("+/- 2 g"); break;
  }  

  Serial.print(" * Accelerometer offsets: ");
  Serial.print(mpu.getAccelOffsetX());
  Serial.print(" / ");
  Serial.print(mpu.getAccelOffsetY());
  Serial.print(" / ");
  Serial.println(mpu.getAccelOffsetZ());
  
  Serial.println();
  
}

void loop()
{
  Serial.print("Time ");
  t=millis();
  t1=t-t2;
  Serial.println(t1*0.001);
  Vector rawAccel = mpu.readRawAccel();
  Vector normAccel = mpu.readNormalizeAccel();

  /*Serial.print(" Xraw = ");
  Serial.print(rawAccel.XAxis);
  Serial.print(" Yraw = ");
  Serial.print(rawAccel.YAxis);
  Serial.print(" Zraw = ");
  Serial.println(rawAccel.ZAxis);*/
    //Xread = analogRead(sensorpin)-Xrest;
    Xread = rawAccel.XAxis-Xrest;
    Yread = rawAccel.YAxis-Yrest;
    Zread = rawAccel.ZAxis-Zrest;

    Xrest = Xread;
    Yrest = Yread;
    Zrest = Zread;
    //Gx=Xread/67.584;
    Gx=Xread;
    Serial.print("\tAcceleration  X :");
    Serial.print(Gx);
    Serial.print("\t \tVelocity  X :");
    Serial.print(Gx*t1*0.001);
    Serial.print("\t \tDistance  X :");
    Serial.print(Gx*(t1*t1*0.0000005));
    Serial.print("\n \n");
    //Yread=analogRead(sensorpin1)-Yrest;
    Gy=Yread;
    Serial.print("\tAcceration  Y :");
    Serial.print(Gy);
    Serial.print("\t\tVelocity  Y :");
    Serial.print(Gy*t1*0.001);
    Serial.print("\t\tDistance  Y :");
    Serial.print(Gy*t1*t1*0.0000005);
    Serial.print("\n \n");
    //Zread=analogRead(sensorpin2)-Zrest;
    Gz=Zread;
    Serial.print("\tAcceration  Z :");
    Serial.print(Gz);
    Serial.print("\t \t Velocity Z : ");
    Serial.print(Gz*t1*0.001);
    Serial.print("\t\tDistance  Z :");
    Serial.print(Gz*t1*t1*0.0000005);
    Serial.print("\n \n \n \n");
    delay(1000);

  
  /*Serial.print(" Xnorm = ");
  Serial.print(normAccel.XAxis);
  Serial.print(" Ynorm = ");
  Serial.print(normAccel.YAxis);
  Serial.print(" Znorm = ");
  Serial.println(normAccel.ZAxis);*/
  t2=t;
  delay(10);
}


