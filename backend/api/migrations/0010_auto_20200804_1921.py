# Generated by Django 3.0.8 on 2020-08-04 19:21

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20200803_2025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wishlist',
            name='product_id',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=10, null=True), size=None),
        ),
    ]
