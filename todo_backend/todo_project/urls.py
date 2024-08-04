from django.contrib import admin
from django.urls import path, include, re_path # adicionar re_path
from django.views.generic import TemplateView # adicionar TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('users.urls')),
    path('api/', include('rest_framework.urls')), # adicionar esta linha
    
]

urlpatterns += [
   re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
] # adicionar esta linha
