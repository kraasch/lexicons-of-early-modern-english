#!/bin/bash

BASE_URL="https://leme.library.utoronto.ca/"
TARGET_URL="$BASE_URL"/lexiconsByDate/
OUTPUT_DIR="page"

mkdir -p "$OUTPUT_DIR"

wget --recursive \
  --level=3 \
  --no-clobber \
  --page-requisites \
  --adjust-extension \
  --convert-links \
  --domains "leme.library.utoronto.ca" \
  --timestamping \
  --wait=2 \
  --random-wait \
  --directory-prefix="$OUTPUT_DIR" \
  "$TARGET_URL"
