from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('getListContainer/', views.getListContainer , name="getListContainer"),
    path('getServer/<str:atribute>/', views.getServer, name="getServer"),
    path('getHistoryContainer/<str:name>/<str:atribute>/', views.getHistoryContainer, name="getHistoryContainer"),
    path('getContainer/<str:name>/<str:atribute>/', views.getContainer , name="getContainer"),
    path('getHistoryAllContainer/<str:atribute>/', views.getHistoryAllContainer, name="getHistoryAllContainer"), 
   
]