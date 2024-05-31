#!/bin/bash

# Получить токен и сохранить его в переменную окружения GH_TOKEN
export GH_TOKEN=$(gh auth token)

# Проверить значение переменной GH_TOKEN
echo "Ваш токен GH_TOKEN: $GH_TOKEN"

# Пример использования токена в команде curl
# curl -H "Authorization: token $GH_TOKEN" https://api.github.com/user