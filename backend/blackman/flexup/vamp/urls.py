from django.auth import path

from . import views

urlpatterns = [

    path('/anthem',views.anthem)


]