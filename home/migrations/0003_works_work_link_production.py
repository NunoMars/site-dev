# Generated by Django 3.2.6 on 2021-08-10 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_works_work_link_github'),
    ]

    operations = [
        migrations.AddField(
            model_name='works',
            name='work_link_production',
            field=models.URLField(blank=True),
        ),
    ]
