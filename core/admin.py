from django.contrib import admin
from core.models import Event

class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'created_at')
    list_filter = ('user', 'date')

admin.site.register(Event, EventAdmin)
