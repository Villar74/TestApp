## Приложение на React-Native CLI (iOS, Android)
![Экран1](https://downloader.disk.yandex.ru/preview/d653a660464891b81dc003e8f286a7cb85a6b99ca20856f7ceefd11b10014235/6133cefd/C0YetP2gA3i661IF1QVztn0jz1xDhZQohqwmCM-Pvs_oo-CU3xY2al9xTjjYj4AOtPkVM-6nBYKF2SQ4DLN1YQ%3D%3D?uid=0&filename=2021-09-04_18-52-09.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048)
![Экран2](https://downloader.disk.yandex.ru/preview/9ff5281b305bdde302fc9951f7941946de1de572d6441e49507b74c5a341593a/6133cf23/JQySViGwDsFeTklJl3-FKfkYODEH1TeiPlBlFtvVan7RlG8Bs8doMOmERn_JQrjIqwSigQaCOKjqpKR0ukTudA%3D%3D?uid=0&filename=2021-09-04_18-51-43.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1424x829)
### Приложение:
- делает запрос на простейший API
- выводит список полученных элементов
- по нажатию на элемент списка - дополнительная информация об элементе списка отображается на следующем экране.

Обновление списка реализовано по времени или по действию пользователя.

Собственные компоненты не создавались, поскольку были использованы стандартные из react-native-paper

API:
https://docs.github.com/en/rest/reference/activity#list-public-events
### Функционал:

- Предоставлен прокручиваемый список  (экран №1) с элементами,  по нажатию на которые должна производиться навигация на экран деталей сущности списка (экран №2).
- На экране №1 отображено 25 элементов из API и обновляются 60 секунд.
- Пользователь может обновить список на экране №1, если с времени последнего обновления прошло более 15 секунд.
- Когда переходим на экран №2, обновление элементов на экране №1 прекращается и отсчет времени до обновления списка сбрасывается. Когда возвращаемся на экран №1 с экрана №2 список обновляется немедленно. Отсчет времени до возможности ручного обновления списка также начинается заново.
