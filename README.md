## Приложение на React-Native CLI (iOS, Android)
![Экран1](https://s34vla.storage.yandex.net/rdisk/9d14ccbefcefa4a0201ed44094073cca0233babcbf605a88e28a70a0f5a90d54/614ca346/ty3dQ0aaDFAfEdpCgDDX-00lvK2n4eI6EjCW7b4_2dBRdjQIJzgV9fGB34rCHTB5sJjAgNnea_rve8sHTl2N9w==?uid=0&filename=2021-09-04_18-52-09.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=69363&hid=1afc0e570bcd461bfa00b632ae37cb14&media_type=image&tknv=v2&etag=d3aa227e67fbaba0a94328576a70d47e&rtoken=UZlY10weklHb&force_default=no&ycrid=na-e1439ab4d2839ffc1c2547ee0b43a546-downloader9h&ts=5ccaba65add80&s=afa82874baa198814217917cae1e836b4d1026f03d5cccdd1a4ba292196a927f&pb=U2FsdGVkX1_3ccZnyhmdncD-O2VLVo3IEKFSBMLN8fV9obuRaRUfB3N0j9jMQhbSoHWO-3oJ7YZ2Nmny_SbLgd3kwjUHk6i5gCKbFmdeog4)
![Экран2](https://s680sas.storage.yandex.net/rdisk/ba0d9b6ad693af042aa416f0b779585b4e2fed3c780394ff846d023f28e81635/614ca31d/ty3dQ0aaDFAfEdpCgDDX-92JOErs0qnfnaJlgujnIZr7FjnhgDeaLgDpjmgu8zyQdbraHGoritgnAveE0FAXcA==?uid=0&filename=2021-09-04_18-51-43.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&fsize=49372&hid=4e704d843010904422e37b2bbb083892&media_type=image&tknv=v2&etag=8d87fcbd40fad75fdecca7b72feae227&rtoken=VoL3yvAa0KBU&force_default=no&ycrid=na-a1512aec3b17ea3eb21b33e52b80df70-downloader9h&ts=5ccaba3e94140&s=8115d6a9fd4514744b04630ee5e11d0c5029b1471bf4ade260c1886a2fc25fca&pb=U2FsdGVkX1-f5ej5q7JQhcrC-9Ywxs_IVZ1cWASU5yxk90w3LWmWhbYOdEUJD5CaEiCv_QJmwwa5mmeAw9xVI4KsMlQciUqkcW5Bl8t_Fxs)
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
