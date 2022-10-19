# from typing import Container
# from django import forms




# class ContainerForm(forms.ModelForm):
#     class Meta:
#         model = Container
#         fields = ('Container', 'Recurso')

#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#         self.fields['Container'].queryset = Container.objects.none()