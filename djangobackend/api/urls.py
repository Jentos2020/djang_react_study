from django.urls import path
from . import views

urlpatterns = [
    path('student/', views.StudentsList.as_view()), 
]
