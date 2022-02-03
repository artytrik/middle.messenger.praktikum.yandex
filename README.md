# yandex-chat

Ссылка на pull request 2 спринта: https://github.com/artytrik/middle.messenger.praktikum.yandex/pull/2

Pet-проект чата на основе программы по обучению миддл-фронтэнд разработчика от Яндекса.

## Разработка

1. Клонируйте локально: `git clone git@github.com:artytrik/yandex-chat.git`
2. Установите зависимости: `npm install`
3. Запустите локальный сервер с вотчером: `npm run dev`

## Сборка и деплой

- Сборка версии для продакшена: `npm run build`
- Запуск express-сервера с раздачей статики на порту 3000: `npm run expressServer`
- Сборка версии для продакшена и запуск express-сервера с раздачей статики на порту 3000: `npm start`

Настроен автодеплой из ветки `deploy` в Netlify. [Ссылка](https://serene-knuth-a26aef.netlify.app/) на домен.

## Дизайн

[Cсылка](https://www.figma.com/file/spXqqviMAdxBrokx0AIoaa/yandex-chat?node-id=0%3A1) на макет в Figma.
