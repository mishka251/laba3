from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import render

# Create your views here.
from django.template.response import TemplateResponse

#enabled_types = ['Тонна', 'Килограмм', 'Грамм', 'Милиграмм', 'Фунт', 'Карат', 'Гран', 'Центнер', 'Унция']

mass_to_g = {
    'Тонна': 1000 * 1000,
    'Килограмм': 1000,
    'Грамм': 1,
    'Милиграмм': 0.001,
    'Фунт': 453.592,
    'Карат': 0.5,
    'Гран': 0.0647989,
    'Центнер': 100 * 1000,
    'Унция': 0.0283495
}


def index(request):
    enabled_types = mass_to_g.keys()
    return TemplateResponse(request, 'index.html', {'types': enabled_types, 'possible_values': list(enabled_types)})


def calculator(request):
    input_type: str = request.GET.get('input_type', None)
    output_type: str = request.GET.get('output_type', None)
    input_value: str = request.GET.get('input_value', None)
    errors = {}
    has_errors = False
    if input_value is None:
        errors.update({'input_value': 'Не задано значение входного значения'})
        has_errors = True

    if input_type is None:
        errors.update({'input_type': 'Не задано значение входного типа'})
        has_errors = True
    if output_type is None:
        errors.update({'output_type': 'Не задано значение выходного типа'})
        has_errors = True

    enabled_types = mass_to_g.keys()

    if input_type not in enabled_types:
        errors.update({'input_type': 'Входной тип не валидный'})
        has_errors = True

    if output_type not in enabled_types:
        errors.update({'output_type': 'Выходной тип не валидный'})
        has_errors = True

    result = convert(input_value, input_type, output_type)
    if has_errors:
        return JsonResponse({
            'valid': False,
            'errors': errors
        })
    else:
        return JsonResponse({
            'valid': True,
            'output_value': result
        })


def convert(input_value: str, input_type: str, output_type: str) -> float:
    if input_type == output_type:
        return float(input_value)

    input_gramm: float = to_gram(input_type, float(input_value))

    return from_gram(output_type, input_gramm)


def to_gram(type: str, val: float) -> float:
    return val*mass_to_g[type]


def from_gram(type: str, val: float) -> float:
    return val/mass_to_g[type]
