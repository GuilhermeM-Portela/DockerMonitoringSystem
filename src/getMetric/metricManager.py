from asyncio.log import logger
from multiprocessing.pool import ThreadPool
import math
import docker
import logging
import requests
import psutil
client = docker.APIClient()
from fastapi.encoders import jsonable_encoder

__logger = logging.getLogger('docker-monitor.metrics')
__docker_client = docker.from_env()

def get_metrics_by_container(name):
        metrics = {}
        try:
            container = __docker_client .containers.get(name)

            metrics[container.name] = {}
        
            metrics[container.name]['status'] = container.status

            if container.status == 'running':
                data = container.stats(stream=False)
                logger.debug('container name: %s statistics: %s', container.name, data)

                metrics[container.name]['cpu_per']   = __calculate_cpu_percent(data)
                metrics[container.name]['mem_per']   = __calculate_mem_percent(data)
                metrics[container.name]['mem_used']  = __calculate_memory_used(data)
                metrics[container.name]['mem_limit'] = __calculate_memory_limit(data)
                metrics[container.name]['net_rx']    = __calculate_network_received(data)
                metrics[container.name]['net_tx']    = __calculate_network_transmitted(data)
               
                __logger.debug('container name: %s metrics: %s'%(container.name, metrics))
        except docker.errors.NotFound:
            __logger.error('Container %s not found.', name)
        except requests.exceptions.ReadTimeout:
            __logger.error('Communication with docker timed out.')
        except docker.errors.APIError:
            __logger.error('Communication with docker socket failed.')

        return metrics

def get_metrics():
        containers = get_docker_containers()
        with ThreadPool(min(25, len(containers))) as pool:
            all_metrics = pool.map(get_metrics_by_container, containers)

        return all_metrics

def get_docker_containers():
        containers = []
        try:
            containers = [container.name for container in __docker_client.containers.list()]
        except requests.exceptions.ReadTimeout:
            __logger.error('Communication with docker timed out.')
        except docker.errors.APIError:
            __logger.error('Communication with docker socket failed.')

        return containers

def __calculate_cpu_percent(data):
    cpu_percent = 0.0
    cpu_count = data['cpu_stats']['online_cpus']
    cpu_delta = (float(data['cpu_stats']['cpu_usage']['total_usage']) -
                    float(data['precpu_stats']['cpu_usage']['total_usage']))
    system_delta = (float(data["cpu_stats"]["system_cpu_usage"]) -
                    float(data["precpu_stats"]["system_cpu_usage"]))
    if system_delta > 0.0:
        cpu_percent = ('{0:.2f}%'.format(cpu_delta / system_delta * 100.0 * cpu_count))

    return cpu_percent

def __calculate_mem_percent(data):
    mem_percent = 0.0
    mem_usage = float(data['memory_stats']['usage'])
    mem_limit = float(data['memory_stats']['limit'])
    if mem_limit > 0.0:
        mem_percent = ('{0:.2f}%'.format(mem_usage / mem_limit * 100))
    return mem_percent

def __calculate_network_received(data):
    net_bytes = float(data['networks']['eth0']['rx_bytes'])
    net_rx = convert_size(net_bytes)
    return net_rx

def __calculate_network_transmitted(data):
    net_bytes = float(data['networks']['eth0']['tx_bytes'])
    net_tx = convert_size(net_bytes)
    return net_tx

def __calculate_memory_used(data):
    mem_bytes = float(data['memory_stats']['usage'])
    mem_total_usage = convert_size(mem_bytes)
    return mem_total_usage

def __calculate_memory_limit(data):
    mem_bytes = float(data['memory_stats']['limit'])
    mem_limit = convert_size(mem_bytes)
    return mem_limit

def convert_size(size_bytes):
   if size_bytes == 0:
       return "0B"
   size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
   i = int(math.floor(math.log(size_bytes, 1024)))
   p = math.pow(1024, i)
   s = round(size_bytes / p, 2)
   return "%s %s" % (s, size_name[i])

def calculate_cpu_total():
    cpu_total = psutil.cpu_percent()
    return cpu_total

def calculate_memory_total():
    mem_total = psutil.virtual_memory()[2]
    return mem_total

def calculate_disco_total():
    disk_total = psutil.disk_usage('/')[3]
    return disk_total