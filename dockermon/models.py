from simple_history.models import HistoricalRecords
from django.db import models

# Create your models here.
class Container(models.Model):
    name = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    cpu_per = models.CharField(max_length=50)
    mem_per = models.CharField(max_length=50)
    mem_used = models.CharField(max_length=50)
    mem_limit = models.CharField(max_length=50)
    net_rx = models.CharField(max_length=50)
    net_tx = models.CharField(max_length=50)
    history = HistoricalRecords()
    
    def __str__(self) -> str:
        return self.name

class Server(models.Model):
    name = models.CharField(max_length=50)
    cpu_per = models.CharField(max_length=50)
    mem_per = models.CharField(max_length=50)
    disk_per = models.CharField(max_length=50)
    history= HistoricalRecords()
    def __str__(self) -> str:
        return self.name

