<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8"/>
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8" />
        <title>JSON2TOON Sitemap</title>
        <style>
          body{font-family:Arial,Helvetica,sans-serif;background:#fff;color:#111;padding:24px}
          h1{color:#0b7285}
          table{border-collapse:collapse;width:100%;margin-top:12px}
          th,td{border:1px solid #e6e6e6;padding:8px;text-align:left}
          th{background:#f8fafb}
        </style>
      </head>
      <body>
        <h1>JSON2TOON Sitemap</h1>
        <table>
          <tr><th>URL</th><th>Last Modified</th><th>Changefreq</th><th>Priority</th></tr>
          <xsl:for-each select="s:urlset/s:url">
            <tr>
              <td><a><xsl:attribute name="href"><xsl:value-of select="s:loc"/></xsl:attribute><xsl:value-of select="s:loc"/></a></td>
              <td><xsl:value-of select="s:lastmod"/></td>
              <td><xsl:value-of select="s:changefreq"/></td>
              <td><xsl:value-of select="s:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
