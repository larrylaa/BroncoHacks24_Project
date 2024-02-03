from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('restroom', RestroomViewset, basename='restroom')
urlpatterns = router.urls

# urlpatterns = [
#     path('', home)
# ]

