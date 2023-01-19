from django.shortcuts import render
from .serializers import StudentSerializer
from rest_framework.generics import ListAPIView
from .models import Student

# Create your views here.
class StudentsList(ListAPIView): 
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
