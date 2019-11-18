from django.http import JsonResponse, HttpResponseBadRequest
from django.shortcuts import render

# Create your views here.
from django.template.response import TemplateResponse

enabled_types = ['Тонна', 'Килограмм', 'Грамм', 'Милиграмм', 'Фунт']


def index(request):
    return TemplateResponse(request, 'index.html', {'types': enabled_types, 'possible_values': enabled_types})


def calculator(request):
    input_type: str = request.GET.get('input_type', None)
    output_type: str = request.GET.get('output_type', None)
    input_value: str = request.GET.get('input_value', None)
    errors = {}
    has_errors = False
    if input_value is None:
        errors.update({'input_value': 'Не задано значение вхожного значения'})  # TODO опечатки исправть
        has_errors = True
    if input_type is None:
        errors.update({'input_type': 'Не задано значение вхожного типа'})
        has_errors = True
    if output_type is None:
        errors.update({'output_type': 'Не задано значение выходного типа'})
        has_errors = True

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

    inputKG: float = toKG(input_type, float(input_value))

    return fromKG(output_type, inputKG)


def toKG(type: str, val: float) -> float:
    if type == 'Тонна':
        return val * 1000
    if type == 'Килограмм':
        return val
    if type == 'Грамм':
        return val / 1000
    if type == 'Милиграмм':
        return val / (1000 * 1000)
    if type == 'Фунт':
        return 0.453592 * val


def fromKG(type: str, val: float) -> float:
    if type == 'Тонна':
        return val / 1000

    if type == 'Килограмм':
        return val

    if type == 'Грамм':
        return val * 1000

    if type == 'Милиграмм':
        return val * (1000 * 1000)

    if type == 'Фунт':
        return val / 0.453592
