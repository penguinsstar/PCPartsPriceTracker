# Generated by Django 3.0.8 on 2020-08-03 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_product_product_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productlinkprice',
            name='product_price',
        ),
        migrations.AddField(
            model_name='productlinkprice',
            name='product_price_curr',
            field=models.DecimalField(decimal_places=2, default=-1, max_digits=1000, null=True),
        ),
        migrations.AddField(
            model_name='productlinkprice',
            name='product_price_prev',
            field=models.DecimalField(decimal_places=2, default=-1, max_digits=1000, null=True),
        ),
    ]