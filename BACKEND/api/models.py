from django.db import models

# Create your models here.
class Restroom(models.Model):
    location = models.CharField(unique=True, max_length=100)
    upvotes = models.IntegerField(default=0)
    image = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return self.location

