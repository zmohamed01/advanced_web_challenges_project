import email
from unicodedata import name
from django.db import migrations 
from api.user.models import CustomUser


class Migration (migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="himanshu",
                        email= "himanshu@lco.dev",
                        is_staff=True,
                        is_superuser=True,
                        phone="07459840136",
                        gender="Male"
                        )

        user.set_password("12345h")
        user.save()

    dependencies = [
            
    ]
    operations=[
        migrations.RunPython(seed_data),
    ]

                           