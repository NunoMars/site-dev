from django.db import models
from django.utils.safestring import mark_safe

class Diplomas(models.Model):
    diploma_name = models.CharField(max_length=200)
    diploma_img = models.ImageField(upload_to="diplomas")
    diploma_category = models.CharField(max_length=100, default='Python')

    def __str__(self):
        return self.diploma_name

    def image_tag_diploma(self):

        return mark_safe(
            '<img src="%s" width="75" height="75" />' % (self.diploma_img)
        )

    image_tag_diploma.short_description = "Image_diplome"

class Works(models.Model):
    work_name = models.CharField(max_length=200)
    work_img = models.ImageField(upload_to="realisations")
    work_description = models.TextField()
    work_link_github = models.URLField(default=None)
    work_link_production = models.URLField(blank=True)
    work_date = models.CharField(blank=True, max_length=10)

    def __str__(self):
        return self.work_name

    def image_tag_work(self):

        return mark_safe(
            '<img src="%s" width="75" height="75" />' % (self.work_img)
        )

    image_tag_work.short_description = "Image_realisation"