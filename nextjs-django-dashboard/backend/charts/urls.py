from django.urls import path
from .views import api_root, CandlestickDataView, LineChartDataView, BarChartDataView, PieChartDataView

urlpatterns = [
    path('', api_root, name='api-root'),
    path('api/candlestick-data/', CandlestickDataView.as_view(), name='candlestick-data'),
    path('api/line-chart-data/', LineChartDataView.as_view(), name='line-chart-data'),
    path('api/bar-chart-data/', BarChartDataView.as_view(), name='bar-chart-data'),
    path('api/pie-chart-data/', PieChartDataView.as_view(), name='pie-chart-data'),
]