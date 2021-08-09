from django.contrib import admin
from .models import Diplomas, Works

# Register your models here.
admin.site.register(Diplomas)
fields = ["image_tag_diploma"]
readonly_fields = ["image_tag_diploma"]

admin.site.register(Works)
fields = ["image_tag_work"]
readonly_fields = ["image_tag_work"]
