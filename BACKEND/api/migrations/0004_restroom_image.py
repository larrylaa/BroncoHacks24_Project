# Generated by Django 5.0.1 on 2024-02-03 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_remove_restroom_name_alter_restroom_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='restroom',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='restroom_images/'),
        ),
    ]
