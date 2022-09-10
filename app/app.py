import threading
from fastapi import FastAPI
from src.getMetric.metricManager import *
from models.nameContainer import nameContainer
from fastapi.encoders import jsonable_encoder
container = get_docker_containers()

app = FastAPI(
        title="EventGenerationTest API",
        description="API desenvolvida para envio de eventos e consumo de notificações do EventHandler.",
        version="1.0.0"
        )
      
@app.get("/allMetric", tags=["Metric docker"])
def get_all_metrics():
    return jsonable_encoder(get_metrics())

@app.get("/listAllContainers", tags=["Metric docker"])
def get_docker_containers():
    return jsonable_encoder(container)

@app.post("/metricPerContainer", tags=["Metric docker"])
def Get_metrics_by_container(nameContainer: nameContainer):
    return jsonable_encoder(get_metrics_by_container(nameContainer.name))

@app.get("/cpuTotal", tags=["Metric System"])
def Get_metric_cpu_total():
    return jsonable_encoder(calculate_cpu_total())

@app.get("/memTotal", tags=["Metric System"])
def Get_metric_cpu_total():
    return jsonable_encoder(calculate_memory_total())

@app.get("/diskTotal", tags=["Metric System"])
def Get_metric_cpu_total():
    return jsonable_encoder(calculate_disco_total())