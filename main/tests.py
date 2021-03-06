from typing import Dict

from django.test import SimpleTestCase
from django.http import JsonResponse
# Create your tests here.

from .views import mass_to_g, convert, to_gram, from_gram
from random import uniform
from django.test import Client


class CalculatorTest(SimpleTestCase):
    def setUp(self) -> None:
        self.enabled_types = mass_to_g.keys()

    def testAllPossible(self):

        val: float = 10.0
        for type1 in self.enabled_types:
            try:
                to_gram(type1, val)
            except:
                self.fail("to_gram " + type1 + " raise Exception")

            try:
                from_gram(type1, val)
            except:
                self.fail("from_gram " + type1 + " raise Exception")

    def testSelfToSelfCorrect(self):
        N: int = 100
        for type1 in self.enabled_types:

            for i in range(N):
                val: float = uniform(-1000, 1000)
                new_val: float = convert(val, type1, type1)

                self.assertEqual(val, new_val)

    def testResponses(self):
        val: str = "150"
        client: Client = Client()
        for type1 in self.enabled_types:
            for type2 in self.enabled_types:
                res: float = convert(val, type1, type2)

                params: Dict = {'input_type': type1, 'output_type': type2, 'input_value': val}

                response = client.get('/calc/', params)
                self.assertEquals(response.status_code, 200)
                self.assertIsInstance(response, JsonResponse)
                self.assertJSONEqual(response.content, {'valid': True, 'output_value': res})
