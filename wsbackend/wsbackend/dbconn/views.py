from django.shortcuts import render
from django.http import HttpResponse
import mysql.connector

def home_page_view(request):
    return HttpResponse("Hello, World!")

def connectDb(request):
    try:
        connection = mysql.connector.connect(host='192.168.2.110',
                                         database='wsweb',
                                         user='root',
                                         password='root')
        return HttpResponse("Success")


    except:
        return HttpResponse("Error")
 