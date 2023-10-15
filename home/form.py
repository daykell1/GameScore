from .models import Image
from django.shortcuts import render

class ImageForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = ("name", "img")

form = ImageForm()  # Crie uma instância do formulário
      return render(request, '.html', {'form': form})
