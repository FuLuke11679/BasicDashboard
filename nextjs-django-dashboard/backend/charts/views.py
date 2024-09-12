from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
from datetime import datetime, timedelta

def api_root(request):
    return HttpResponse("Welcome to the Dashboard API. Use /api/ endpoints to access data.")

class CandlestickDataView(APIView):
    def get(self, request):
        base_date = datetime(2023, 1, 1)
        data = {
            "data": [
                {
                    "time": (base_date + timedelta(days=i)).strftime('%Y-%m-%d'),
                    "open": 30 + i,
                    "high": 40 + i,
                    "low": 25 + i,
                    "close": 35 + i
                } for i in range(30)  # Generates 30 days of sample data
            ]
        }
        return Response(data)

class LineChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
        return Response(data)

class BarChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
        return Response(data)

class PieChartDataView(APIView):
    def get(self, request):
        data = {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
        return Response(data)
