from django.conf.urls.defaults import url, patterns
from wkhtmltopdf.views import PDFTemplateView

urlpatterns = patterns('',
    url(r'^pdf/$', PDFTemplateView.as_view(template_name='my_template.html',
                                           filename='my_pdf.pdf'), name='pdf'),
)