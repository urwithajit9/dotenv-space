#!/usr/bin/env bash

set -euo pipefail

# Output files
MD_OUT="md_content.md"
HTML_OUT="html_content.md"
CSS_OUT="css_content.md"
JS_OUT="js_content.md"

# Clear old output files
> "$MD_OUT"
> "$HTML_OUT"
> "$CSS_OUT"
> "$JS_OUT"

echo "Merging files from: $(pwd)"
echo "----------------------------------"

# Find and process files
find . -type f \( \
    -name "*.md" -o \
    -name "*.html" -o \
    -name "*.css" -o \
    -name "*.js" \
\) | sort | while read -r file; do

    case "$file" in
        *.md)
            OUT_FILE="$MD_OUT"
            ;;
        *.html)
            OUT_FILE="$HTML_OUT"
            ;;
        *.css)
            OUT_FILE="$CSS_OUT"
            ;;
        *.js)
            OUT_FILE="$JS_OUT"
            ;;
        *)
            continue
            ;;
    esac

    {
        echo ""
        echo "=================================================="
        echo "FILE: $file"
        echo "=================================================="
        echo ""
        cat "$file"
        echo ""
    } >> "$OUT_FILE"

done

echo "Done."
echo "Generated:"
echo " - $MD_OUT"
echo " - $HTML_OUT"
echo " - $CSS_OUT"
echo " - $JS_OUT"