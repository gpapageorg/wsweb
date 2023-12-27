from django.shortcuts import render
from django.http import HttpResponse
import mysql.connector
import json
import datetime


def home_page_view(request):
    return HttpResponse("Hello, World!")


def getDatabaseData(request):
    connection = connectDb()
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM " +
                   request.GET["loc"] + " ORDER BY num DESC LIMIT 1")

    result = cursor.fetchall()
    result = list(result[0])
    print("\033[93mDebug: Got And Returned:\033[0m " + str(result))

    # Ask db for column names
    cursor = connection.cursor()
    cursor.execute(
        "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME ='patrasin' ORDER BY ORDINAL_POSITION;")
    columns = cursor.fetchall()

    columns = setColumns(columns)

    print("\033[93mDebug: Got And Returned:\033[0m " + str(columns))

    return HttpResponse(parseJson(result, columns),  content_type="application/json")


def connectDb():
    try:
        connection = mysql.connector.connect(host='192.168.2.110',
                                             database='wsweb',
                                             user='root',
                                             password='root')
        print("\033[92mConnection To Database Was Successfull\033[0m")

        return connection

    except:
        print("\033[91mError: Can't Connect To Database\033[0m")
        return -1


def parseJson(result, columns):
    time = result[7].strftime("%d %m %Y %H %M")
    str2 = dict()
    for i in range(len(result) - 2):
        str2.update([(columns[i], result[i])])

    print(str2)
    str = {"Name": result[0],
           "Id": result[1],
           "Temperature": result[2],
           "Humidity": result[3],
           "Pressure": result[4],
           "Altitude": result[5],
           "Soil": result[6],
           "TimeStamp": time
           }
    print(result[7].strftime("%d %m %Y %H %M"))

    return json.dumps(str2)


def setColumns(columns):
    columns = list(columns)

    for i in range(len(columns)):
        columns[i] = str(columns[i])
        columns[i] = columns[i].replace('(', '')
        columns[i] = columns[i].replace(')', '')
        columns[i] = columns[i].replace(',', '')
        columns[i] = columns[i].replace("'", '')

    return columns
