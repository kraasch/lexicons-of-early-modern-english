#!/bin/bash

START_URL="https://leme.library.utoronto.ca/lexiconsByDate/"
wget --spider \
  --recursive \
  --no-verbose \
  --level=inf \
  "$START_URL" \
  2>&1 \
  >linkslist.txt
