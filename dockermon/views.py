from dataclasses import field
from operator import contains
from django.shortcuts import render
from django.http import HttpResponse
from .models import Container, Server
from django.http import JsonResponse
from multiprocessing.pool import ThreadPool
import json

def home(request):
    qs = Container.objects.all()
    return render(request, 'home.html', {'qs': qs})

def getListContainer(request):
    qs = list(Container.objects.values())
    if request.method == "GET":
        return JsonResponse({'data':qs})

def getHistoryContainer(request, name, atribute):
    data = []
    containers = Container.objects.filter(name=name)
    for i in containers:
        cpu = list(Container.history.filter(name=i).values_list(atribute)[:20])
        data = list(zip(*cpu))
    if request.method == "GET":
        return JsonResponse({'data': list(data[0][::-1])})

def getServer(request, atribute):
    data = []
    containers = Server.objects.filter(name="Ubuntu")
    for i in containers:
        server = list(Server.history.filter(name=i).values_list(atribute)[:20])
        data = list(zip(*server))
    if request.method == "GET":
        return JsonResponse({'data': list(data[0][::-1])})

def getHistoryAllContainer(request, atribute):
    data = []
    data_json={}
    containers = Container.objects.all()
    for i in containers:
        cpu = list(Container.history.filter(name=i).values_list(atribute)[:60])
        data = list(zip(*cpu))
        json.dumps(data)
        data_json.update({i.name:list(data[0][::-1])})
    if request.method == "GET":
        return JsonResponse(data_json)

def getContainer(request, name, atribute):
    data_json={}
    if request.method == "GET":
        if atribute == "mem_used":
            container= Container.objects.filter(name=name)
            for i in container:
                data_json.update({'data':(i.mem_used, i.mem_limit)})
        if atribute == "net_rx":
            container= Container.objects.filter(name=name)
            for i in container:
                data_json.update({'data':(i.net_rx, i.net_tx)})
        
    return JsonResponse(data_json)