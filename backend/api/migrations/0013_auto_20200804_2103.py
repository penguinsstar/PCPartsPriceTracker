# Generated by Django 3.0.8 on 2020-08-04 21:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_auto_20200804_1959'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wishlist',
            name='product',
        ),
        migrations.AlterField(
            model_name='wishlist',
            name='username',
            field=models.CharField(blank=True, max_length=150, unique=True),
        ),
        migrations.CreateModel(
            name='Wishlist_item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_id', models.IntegerField(blank=True, null=True, unique=True)),
                ('wishlist', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='wishlist_items', to='api.Wishlist')),
            ],
        ),
    ]
