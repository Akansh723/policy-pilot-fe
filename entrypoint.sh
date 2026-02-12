#!/bin/sh
set -e

# Replace placeholder with actual environment variable
if [ -n "$REACT_APP_API_BASE_URL" ]; then
  sed -i "s|REACT_APP_API_BASE_URL_PLACEHOLDER|$REACT_APP_API_BASE_URL|g" /usr/share/nginx/html/config.js
fi

# Start nginx
exec nginx -g 'daemon off;'
