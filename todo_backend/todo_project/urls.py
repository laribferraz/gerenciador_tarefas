from django.contrib import admin
from django.urls import path, include, re_path # Adicionado include e re_path
from django.views.generic import TemplateView # Adicionado TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
     path('api/', include('rest_framework.urls')), # Adicionado para habilitar a rota do rest_framework
]

urlpatterns += [
   re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
] # Adicionado para redirecionar todas as rotas para o index.html do frontend
