from django.db import models
from django.utils.safestring import mark_safe

class Diplomas(models.Model):
    diploma_name = models.CharField(max_length=200)
    diploma_img = models.ImageField(upload_to="diplomas")

    def __str__(self):
        return self.diploma_name

    def image_tag_diploma(self):

        return mark_safe(
            '<img src="%s" width="75" height="75" />' % (self.diploma_img)
        )

    image_tag.short_description = "Image_diplome"

class Works(models.Model):
    work_name = models.CharField(max_length=200)
    work_img = models.ImageField(upload_to="realisations")
    work_description = models.TextField()

    def __str__(self):
        return self.work_name

    def image_tag_work(self):

        return mark_safe(
            '<img src="%s" width="75" height="75" />' % (self.work_img)
        )

    image_tag.short_description = "Image_realisation"