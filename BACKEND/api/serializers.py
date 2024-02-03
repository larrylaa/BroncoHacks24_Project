from rest_framework import serializers
from.models import *

class RestroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restroom
        fields = ('location','upvotes')

    location = models.CharField(unique=True, max_length=100)
    upvotes = models.IntegerField(default=0)