#!/usr/bin/env bash

curl "https://interactive.zeit.de/cronjobs/2020/corona/impfzahlen.json" | gunzip > data.json
