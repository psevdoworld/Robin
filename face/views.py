from django.shortcuts import render
def index_page(request):
     # import ipdb; ipdb.set_trace()
     return render(request, 'index.html', {})
# Create your views here.
