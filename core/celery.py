# django_celery/celery.py
import os
from celery import Celery
from core.getMetric.metricManager import deleteDataBase, updateAll



os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
app = Celery("core")
app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()

@app.task( bind =True)
def colectAllMetric( self ):
    updateAll()

@app.task( bind =True)
def cleanDataBase( self ):
    deleteDataBase()